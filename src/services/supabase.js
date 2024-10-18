import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ihedkshgsptofnddbehn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZWRrc2hnc3B0b2ZuZGRiZWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyNTEwMzcsImV4cCI6MjAxODgyNzAzN30.TAoGbPOIGj7yf7FLN84f3PsCsloDEc4dNXtqDWfDhk8'
const supabase = createClient(supabaseUrl, supabaseKey)
export {supabaseUrl} ; 
export default supabase ; 