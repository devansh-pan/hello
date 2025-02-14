import type {PageServerLoad} from './$types';
import {supabase} from '$lib/supabase'
import {marked} from 'marked';
export const load: PageServerLoad = async ({params}) => {
  const {data, error} = await supabase.from('posts').select('*').eq('slug',params.post);
  if (error) {
    return {
      status: 400,
      body: {message:error.message}
    }
  }
  let content = marked.parse(data[0].content)
  return { data, content};
}