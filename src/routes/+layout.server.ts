import users from '../lib/db/user.json';
import bagData from '../lib/db/bag.json';

export const load = async () => {
    return {
        data : {
            bagData,
            users
        }
    };
};