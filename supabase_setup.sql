-- CEBPL WEBSITE - SUPABASE DATABASE SETUP SCRIPT
-- Paste this script into the Supabase SQL Editor (Dashboard > SQL Editor > New Query) and click Run.

-- 1. Create the submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT,
  company TEXT,
  service TEXT,
  message TEXT,
  type TEXT NOT NULL CHECK (type IN ('contact', 'quote')) -- distinguishes Contact Page vs Get a Quote Modal submissions
);

-- 2. Enable Row Level Security (RLS) for data privacy
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy to allow public/anonymous inserts (so visitors can submit forms)
CREATE POLICY "Allow anonymous submissions" 
ON contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 4. Create a policy to allow only authenticated users to read submissions (so your admin team can read them, but not general public)
CREATE POLICY "Allow authenticated reads" 
ON contact_submissions 
FOR SELECT 
TO authenticated 
USING (true);

-- Optional: Create index on type and email for fast dashboard filtering
CREATE INDEX IF NOT EXISTS idx_submissions_type ON contact_submissions(type);
CREATE INDEX IF NOT EXISTS idx_submissions_email ON contact_submissions(email);
