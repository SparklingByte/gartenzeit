import { createClient } from '@supabase/supabase-js';
import chalk from 'chalk';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabaseClientSingleton = () => {
  return createClient(supabaseUrl, supabaseAnonKey);
};

declare global {
  var supabase: undefined | ReturnType<typeof supabaseClientSingleton>;
}

const supabase = globalThis.supabase ?? supabaseClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.supabase = supabase;

console.log(chalk.bgRed('SUPABASE CLIENT STARTED'));

export { supabase };
