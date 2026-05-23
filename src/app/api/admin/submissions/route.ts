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
      // Graceful local development fallback with rich mock data
      const mockSubmissions = [
        {
          id: 1,
          created_at: new Date(Date.now() - 3600000 * 2).toISOString(), // 2 hours ago
          name: "Ramesh Sahay",
          email: "ramesh.sahay@industrialgrids.com",
          phone: "+91 98765 43210",
          subject: "Tender Invitation - Substations Loop",
          company: "Industrial Grids Corp",
          service: "HT/LT Substation Installations",
          message: "We would like to invite CEBPL to bid for our upcoming turnkey HT/LT distribution systems at our new manufacturing hub.",
          type: "contact"
        },
        {
          id: 2,
          created_at: new Date(Date.now() - 3600000 * 5).toISOString(), // 5 hours ago
          name: "Anita Deshmukh",
          email: "anita@greenbuilders.in",
          phone: "+91 90123 45678",
          subject: "Substation Quote Request",
          company: "Green Builders Pvt Ltd",
          service: "HT/LT Substations",
          message: "Please provide a detailed rate analysis for standard 11KV/433V indoor substations including transformer ratings.",
          type: "quote"
        },
        {
          id: 3,
          created_at: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
          name: "Vikram Malhotra",
          email: "v.malhotra@indiahousing.org",
          phone: "+91 93210 98765",
          subject: "Commercial Electrification Inquiry",
          company: "India Housing Developers",
          service: "Commercial Electrification",
          message: "Looking for an EPC contractor to execute electrical and wiring layouts for our multi-story residential towers.",
          type: "contact"
        }
      ];
      return NextResponse.json({ submissions: mockSubmissions, isMock: true });
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
