import {compile} from "mdsvex"
import {json} from "@sveltejs/kit"

import type { PageServerLoad } from "./$types"
export const load: PageServerLoad = async ({fetch , params}) => {
  const res = await fetch(`https://raw.githubusercontent.com/devansh-pan/posts/refs/heads/main/${params.post}.md`);
	const item = await res.text();
  const result = await compile(item, {
    filename: 'example.svx',
    extension: '.svx',
  });
 console.log(result?.code)
  return {
    compiledCode: result,
  };
}
