import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const { data: notes } = await supabase.from('notes').select('note,id').limit(5).order('id')
  return { notes: notes ?? [] }
}