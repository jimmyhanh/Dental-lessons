// Validate the access token with the configured identity provider on every request.
// Neither browser UI state nor platform-preview identity unlocks course materials.
export async function verifyLearner(request, settings, fetcher=fetch) {
  const header=request.headers.get('authorization')||'';
  const match=/^Bearer ([^\s]+)$/.exec(header);
  if (!match) return {status:401,error:'Please sign in to access learning materials.'};
  const {SUPABASE_URL:url,SUPABASE_PUBLISHABLE_KEY:key}=settings;
  if (!url || !key) return {status:503,error:'Account services are not connected yet. Learning materials remain locked.'};
  let origin;
  try { origin=new URL(url); if(origin.protocol!=='https:' || origin.username || origin.password || origin.pathname!=='/' || origin.search || origin.hash) throw Error(); }
  catch { return {status:503,error:'Account services are unavailable. Learning materials remain locked.'}; }
  try {
    const response=await fetcher(new URL('/auth/v1/user',origin),{
      headers:{Authorization:`Bearer ${match[1]}`,apikey:key},
      cache:'no-store',signal:AbortSignal.timeout(10000),redirect:'error'
    });
    if(!response.ok) return {status:response.status>=500?503:401,error:'Your session could not be verified. Please sign in again.'};
    const user=await response.json();
    if(!user || typeof user.id!=='string' || !user.id || user.is_anonymous===true || !(user.email_confirmed_at || user.confirmed_at)) return {status:401,error:'A verified account is required to access learning materials.'};
    return {status:200,user:{id:user.id,email:user.email||null}};
  } catch {return {status:503,error:'Account verification is temporarily unavailable. Please try again.'};}
}
