import { supabase } from "./supabase";

async function getThonet() {
  const { data } = await supabase.from("thonet").select();
  return data;
}

async function getThonetById(id) {
  const { data, error } = await supabase
    .from("thonet")
    .select("*")
    .eq("id", id);
  return data;
}

async function getTrays() {
  const { data } = await supabase.from("trays").select();
  return data;
}

async function getModren() {
  const { data } = await supabase.from("modernFurniture").select();
  return data;
}

export { getThonet, getThonetById, getTrays, getModren };
