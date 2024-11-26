import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://elvbuwgnfhegtotefukf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdmJ1d2duZmhlZ3RvdGVmdWtmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjU0OTQyOSwiZXhwIjoyMDQ4MTI1NDI5fQ.RS2RQCbyfJfPHZ39LWZcoOHJMml_Wn4I2XLmIMFQWZY";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
