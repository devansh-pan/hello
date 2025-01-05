import {marked} from "marked"
  import matter from "gray-matter"
import {json} from "@sveltejs/kit"
import {PUBLIC_GIT_TOKEN} from "$env/static/public"

import type { PageServerLoad } from "./$types"
export const load: PageServerLoad = async ({fetch , params}) => {
  const res = await fetch(`https://raw.githubusercontent.com/devansh-pan/posts/refs/heads/main/${params.post}.md`,{ 
    headers: {
      Authorization: `token ${PUBLIC_GIT_TOKEN}`,
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=59'
  }});
	const item = await res.text();
  const parsed = matter(item);
  const html = marked(parsed.content)
 console.log()
  return {
    html, data:parsed.data
  };
}
