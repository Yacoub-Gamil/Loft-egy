import { supabase } from "./supabase";

async function getThonet() {
  const { data } = await supabase.from("thonet").select();
  return data;
}

export { getThonet };
