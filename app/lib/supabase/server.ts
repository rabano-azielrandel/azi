import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function getEnvironmentVariables() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAPIKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

    if (!supabaseUrl || !supabaseAPIKey) {
        throw new Error (
            "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_API_KEY"
        )
    }
    
    return { supabaseUrl, supabaseAPIKey}
}

export async function createSupabaseServerClient() {
    const {supabaseUrl, supabaseAPIKey} = getEnvironmentVariables();
    const cookieStore = await cookies();

    return createServerClient (supabaseUrl, supabaseAPIKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll();
            }
        }
    })
}