import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { AUTH_SECRET, AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from "$env/static/private";
// hooks.server.ts
import { withClerkHandler } from 'svelte-clerk/server';

export const handle = withClerkHandler();
/* const auth = SvelteKitAuth({
  providers: [
    GitHub({
    clientId: AUTH_GITHUB_ID,
    clientSecret: AUTH_GITHUB_SECRET
  })
  ],
  session: {
    maxAge: 60 * 60 * 24 * 30,
    strategy: "jwt",
  },

  secret: AUTH_SECRET,
});

export const handle = auth.handle; */
