import { supabase } from "./supabaseClient.js";

// Get all data in one hit from Supabase (this is all rows in the DB)
export async function get_all_food_data_from_supabase() {
    let { data, error } = await supabase
        .from('food_codes')
        .select("*")

    if (error) {
        console.log(error);
        return;
    }
    // Log data if necessary
    // console.log(data);
    return data;
};