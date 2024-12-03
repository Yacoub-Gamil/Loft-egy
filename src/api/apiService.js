import { supabase } from "./supabase";

async function getStore() {
  const { data } = await supabase.from("store").select();
  return data;
}

// async function getThonetById(id) {
//   const { data, error } = await supabase
//     .from("thonet")
//     .select("*")
//     .eq("id", id);

//   return data;
// }

export { getStore };
