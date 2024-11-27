import { supabase } from "./supabase";

async function getThonet() {
  const { data } = await supabase.from("thonet").select();
  return data;
}

async function getTrays() {
  const { data } = await supabase.from("trays").select();
  return data;
}
export { getThonet, getTrays };
