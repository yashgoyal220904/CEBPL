import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isConfigured = 
  supabaseUrl && 
  supabaseUrl !== "https://your-project-id.supabase.co" && 
  supabaseAnonKey && 
  supabaseAnonKey !== "your-supabase-anon-key";

// Initialize client if configured, otherwise export null to fallback gracefully
export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

if (!isConfigured) {
  console.warn(
    "Supabase is not configured. Form submissions will fallback to simulated success messages. " +
    "Please update NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your Vercel/environment settings."
  );
}
