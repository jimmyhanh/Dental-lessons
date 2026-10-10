import {env} from 'cloudflare:workers';
import {serveMaterials} from '../../../server/materials-handler.js';
export const dynamic='force-dynamic';
export async function GET(request:Request){return serveMaterials(request,env);}
