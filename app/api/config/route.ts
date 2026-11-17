export const dynamic='force-dynamic';
export function GET(){
  const config={supabaseUrl:process.env.SUPABASE_URL||'',supabasePublishableKey:process.env.SUPABASE_PUBLISHABLE_KEY||'',guideEndpoint:process.env.SUPABASE_URL||''};
  return new Response('window.ACADEMY_CONFIG = '+JSON.stringify(config)+';', {headers:{'Content-Type':'application/javascript; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
}
