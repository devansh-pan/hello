import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ depends,  locals:{supabase , user }}) => { 
  depends('supabase:db:profiles')
  const id = user?.id
  const { data, error} = await supabase.from('profiles').select('*').eq('id',id).single();
  return { profile:data ?? [] }
}