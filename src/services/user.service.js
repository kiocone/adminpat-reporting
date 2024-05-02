
import { getConnection } from './dabase.service.js';

export async function login(userP, passwordP) {

  const dbConn = await getConnection()

  try {
    const [res] = await dbConn.execute(
      'SELECT * FROM `users` WHERE `user` = ? AND `password` = ?',
      [userP, passwordP]
    );
    await dbConn.end()
    if (res.length) return res[0].user;
    return false;
  } catch (error) {
    console.error(error);
    return false
  }
}

export async function updateUserToken(user, token) {
  const dbConn = await getConnection();

  try {
    const now = new Date()
    const [res] = await dbConn.execute(
      'UPDATE `users` SET `token` = ?, `updated` = ?  WHERE `user` = ?',
      [token, now, user]
    );
    await dbConn.end()
    if (res.changedRows) return true;
    return false;
  } catch (error) {
    console.error(error);
    return false
  }
}
