import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
  const theme = cookies.get('theme');
  console.log(theme);
  const { session } = await safeGetSession()
  return {
    session,
    theme,
  }
}