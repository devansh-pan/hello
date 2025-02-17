import { redirect } from '@sveltejs/kit';
import {supabase} from "$lib/supabase";
export const GET = async (event:any) => {
  const {
    url,
    locals: { supabase }
  } = event;
  const code = url.searchParams.get('code') as string;
  const next = url.searchParams.get('next') ?? '/';

  if (code) {
    const { data,error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const {error} = await supabase.from('users').upsert({id:data.user.id,full_name:data.user.user_metadata.full_name,email:data.user.email}).select(); 
      throw redirect(303, `/${next.slice(1)}`);
    }
  }

  // return the user to an error page with instructions
  throw redirect(303, '/auth/auth-code-error');
};
