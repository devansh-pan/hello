import type {PageServerLoad} from './$types'
import {marked} from "marked"
import matter from "gray-matter"

import {PUBLIC_GIT_TOKEN} from "$env/static/public"
export const load: PageServerLoad = async ({}) => {
  const repoUrl =
    'https://api.github.com/repos/devansh-pan/posts/contents/';

  // Fetch files from GitHub
  const response = await fetch(repoUrl, {
     headers: {
      Authorization: `token ${PUBLIC_GIT_TOKEN}`,
      "Accept": "application/vnd.github.v3+json",
       'Cache-Control': 's-maxage=3600, stale-while-revalidate=59'
    }
  });

  if (!response.ok) {
    console.log(response.statusText)
    throw new Error('Failed to fetch content from GitHub' + response.statusText);
  }

  const files = await response.json();
  let file : string = ''
  // Filter only markdown files and fetch their content
  const markdownFiles = files.filter(file => file.name.endsWith('.md') || file.name.endsWith('.svx'));

  // Fetch content for each markdown file
  const posts = await Promise.all(
    markdownFiles.map(async file => {
      const contentResponse = await fetch(file.download_url);
      const content = await contentResponse.text();

      // Optional: Extract frontmatter metadata
      const parsed = await matter(content);
      const html = marked(parsed.content)
      const data = parsed.data;
      const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
  const thumbnail = imageMatch ? imageMatch[1] : null;
  
      return {
        path: `/blog/${file.name.replace('.md', '').replace('.svx', '')}`,
       data, html, thumbnail
      };
    })
  );

  return { posts };
}

// Helper function to extract frontmatter metadata
function extractMetadata(content) {
  const match = content.match(/---\n([\s\S]+?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  return Object.fromEntries(
    yaml.split('\n').map(line => {
      const [key, ...value] = line.split(':');
      return [key.trim(), value.join(':').trim()];
    })
  );
}
