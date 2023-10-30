import { _saveData } from '../+page.server';
import { fail } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }:any) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    const isAuthenticated = true;

    const randomId = () => {
      return Math.floor(Math.random() * 1000) + 1;
    };

    const user = {
      id: randomId(),
      username,
      password,
      isAuthenticated,
    };

    if (!username) {
			return fail(400, { username, missing: true });
		}

    if (!password) {
      return fail(400, { password, missing: true });
    }

    try {
      _saveData(user, 'src/lib/db/user.json');
      console.log('Donnée enregistrée avec succès');
      return { success: true };
    } catch (error) {
      console.error('Une erreur est survenue lors de l\'enregistrement des données', error);
    }
  },
};