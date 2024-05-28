import { getConnection } from './dabase.service.js';
export async function login(userP, passwordP) {
    const dbConn = await getConnection();
    try {
        const [rows, fields] = await dbConn.query('SELECT * FROM `users` WHERE `user` = ? AND `password` = ?', [userP, passwordP]);
        await dbConn.end();
        if (rows.length)
            return rows[0][1];
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
export async function updateUserToken(user, token) {
    const dbConn = await getConnection();
    try {
        const now = new Date();
        const [res] = await dbConn.query('UPDATE `users` SET `token` = ?, `updated` = ?  WHERE `user` = ?', [token, now, user]);
        await dbConn.end();
        if (res)
            return true;
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
//# sourceMappingURL=user.service.js.map