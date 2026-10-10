import {env} from 'cloudflare:workers';
export const dynamic='force-dynamic';
export function GET(){
  const config={supabaseUrl:env.SUPABASE_URL||'',supabasePublishableKey:env.SUPABASE_PUBLISHABLE_KEY||'',guideEndpoint:env.GUIDE_ENDPOINT||''};
  return new Response('window.ACADEMY_CONFIG = '+JSON.stringify(config)+';', {headers:{'Content-Type':'application/javascript; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
