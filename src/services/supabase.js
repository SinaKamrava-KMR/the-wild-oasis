import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xsfczdfgozznuavxsvvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZmN6ZGZnb3p6bnVhdnhzdnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2OTA2OTIsImV4cCI6MjAwNjI2NjY5Mn0.2h3Gy1siAgG3RVnBkcqggEGAx_bqiTyK2CRJXZqEqmA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
