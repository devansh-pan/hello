import type {PageServerLoad} from './$types'
import {supabase} from '$lib/supabase'
export const load:PageServerLoad = async () => {
  let posts = await supabase.from('posts').select('*') ?? []
  return {
    posts
  }
}