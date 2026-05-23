import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  // Extract Authorization header
  const authHeader = req.headers.get("authorization");
  
  // Retrieve the expected admin password from environment variables
  // Fallback to a default password if not set in .env.local yet
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (authHeader !== adminPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (!supabase) {
      // Return empty array and notice that database is not configured
      return NextResponse.json({ 
        submissions: [], 
        isMock: true,
        notice: "Database not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your Vercel settings."
      });
    }

    // Fetch from Supabase contact_submissions table
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json({ submissions: data || [], isMock: false });
  } catch (error: unknown) {
    console.error("Dashboard API Error:", error);
    const message = error instanceof Error ? error.message : "Failed to fetch data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
