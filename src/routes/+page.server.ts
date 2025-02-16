import type {PageServerLoad} from './$types'
import {supabase} from '$lib/supabase'
export const load: PageServerLoad = async () => {
  const posts = await supabase.from('posts').select('*').neq("deleted " , true).order("posted_at") ?? []
  return {
    posts
  }
}