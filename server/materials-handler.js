import {verifyLearner} from './auth.js';
import {courses,resources} from './materials.js';
export const privateHeaders={'Content-Type':'application/json; charset=utf-8','Cache-Control':'private, no-store, max-age=0','Vary':'Authorization','X-Content-Type-Options':'nosniff'};
export async function serveMaterials(request,settings,fetcher=fetch){
  const auth=await verifyLearner(request,settings,fetcher);
  if(auth.status!==200)return new Response(JSON.stringify({error:auth.error}),{status:auth.status,headers:privateHeaders});
  return new Response(JSON.stringify({courses,resources,user:auth.user}),{headers:privateHeaders});
}
