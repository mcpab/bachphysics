'use client';

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import {
    // Import predefined theme
    ThemeSupa,
  } from '@supabase/auth-ui-shared'
  
export default function LoginSupa() {

    const supabase = createClient('https://imnlccbvzfkewfhxdqkt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltbmxjY2J2emZrZXdmaHhkcWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3Njk5OTEsImV4cCI6MjAzMjM0NTk5MX0.n4o0--5JlO7OmUOIZRNhcugIM-zO8X_0puyZ_P33IvE');

    return  <Auth supabaseClient={supabase} 
    appearance={{ theme: ThemeSupa }}
    providers={['google']}/>;
}


