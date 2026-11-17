import { serveMaterials } from '../../../server/materials-handler.js';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  return serveMaterials(request, {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
  });
}