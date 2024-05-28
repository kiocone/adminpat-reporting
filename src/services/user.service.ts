import { UserInfo } from '../interfaces/user-info.interfae.js';
import { getConnection } from './dabase.service.js';
import { RowDataPacket } from 'mysql2'

export async function login(userP: string, passwordP: string) {

  const dbConn = await getConnection()

  try {
    const [rows, fields] = await dbConn.query<RowDataPacket[]>(
      'SELECT * FROM `users` WHERE `user` = ? AND `password` = ?',
      [userP, passwordP]
    );
    await dbConn.end()
    if (rows.length) return rows[0][1];
    return false;
  } catch (error) {
    console.error(error);
    return false
  }
}

export async function updateUserToken(user: string, token: string) {
  const dbConn = await getConnection();

  try {
    const now = new Date()
    const [res] = await dbConn.query(
      'UPDATE `users` SET `token` = ?, `updated` = ?  WHERE `user` = ?',
      [token, now, user]
    );
    await dbConn.end()
    if (res) return true;
    return false;
  } catch (error) {
    console.error(error);
    return false
  }
}
