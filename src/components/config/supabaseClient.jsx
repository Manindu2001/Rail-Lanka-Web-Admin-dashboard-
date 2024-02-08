import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mamsfcqsbdkiubwwjbud.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hbXNmY3FzYmRraXVid3dqYnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMTEwOTYsImV4cCI6MjAyMDg4NzA5Nn0.fu-8UZ_tr_1U1t_6LHAUYJGXTD2YaUiHTnXrJ0rz1jg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
