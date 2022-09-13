import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

// Connect to Supabase
const supabaseUrl = 'https://yxwmnvamhhywjufyduyn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4d21udmFtaGh5d2p1ZnlkdXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5NDI3OTUsImV4cCI6MTk3ODUxODc5NX0.ykU0jr8VvC_kfDlyyhg5pMMk7qLs4IRSW2DFUtsNDv4'
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
