import type {PageServerLoad} from "./$types"
import {PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_KEY} from "$env/static/public"

export const load: PageServerLoad = async ({ params , locals:{ supabase }}) => { 
  const {id} = params
const {data, error} = await supabase.from('profiles').select('*').eq('username', id).single()
  return { profile :data}
}