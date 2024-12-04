import { supabase } from "./supabase";

async function getStore() {
  const { data } = await supabase.from("store").select();
  return data;
}

async function getItemById(id) {
  const { data } = await supabase.from("store").select("*").eq("id", id);
  return data;
}

export { getStore, getItemById };
