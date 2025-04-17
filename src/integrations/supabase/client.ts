
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ueexrpaajwiilyophksq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZXhycGFhandpaWx5b3Boa3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODcxNzIsImV4cCI6MjA2MDQ2MzE3Mn0.YEA8gQH_PdkQc2wwP5toZIiowkrbDXWtvrMy15IdilU";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
