# Database Setup Instructions

## Supabase Setup

1. **Create a Supabase account** at https://supabase.com
2. **Create a new project**
3. **Get your credentials** from Project Settings > API

## Database Schema

Run this SQL in your Supabase SQL Editor (Database > SQL Editor):

```sql
-- Create appointments table
CREATE TABLE IF NOT EXISTS appointment_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the public form)
CREATE POLICY "Allow public inserts"
ON appointment_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to read all records
-- (Optional: for admin dashboard later)
CREATE POLICY "Allow authenticated reads"
ON appointment_requests
FOR SELECT
TO authenticated
USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_appointment_created_at
ON appointment_requests(created_at DESC);
```

## Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your Supabase credentials in `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your anon/public key

## Verification

Test the connection by submitting a form on your website. You should see the data appear in your Supabase dashboard under Database > Tables > appointment_requests.
