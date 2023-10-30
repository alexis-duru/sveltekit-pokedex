import { goto } from "$app/navigation";
import users from "../../lib/db/user.json";
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }:any) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    const user = users.find((u) => u.username === username && u.password === password);

    if (!password) {
      return fail(400, { password, missing: true });
    }

    if(!username) {
      return fail(400, { username, missing: true });
    }
    if (!user) {
      return fail(401, { username, password, invalid: true });
    }

    try {
      console.log('Donnée enregistrée avec succès');      
      return { success: true };
    } catch (error) {
      console.error('Une erreur est survenue lors de l\'enregistrement des données', error);
    }
  },
};