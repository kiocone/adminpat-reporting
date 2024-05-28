import mysql2 from 'mysql2/promise';
export async function getConnection() {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const database = process.env.DB_DATABASE;
    return await mysql2.createConnection({
        user,
        password,
        host,
        database,
        waitForConnections: true,
        rowsAsArray: true,
    });
}
//# sourceMappingURL=dabase.service.js.map