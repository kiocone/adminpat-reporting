import jsonwebtoken from 'jsonwebtoken';
const privateKey = process.env.PRIVATE_KEY;
export const JwtEncode = (user) => {
    if (privateKey) {
        return jsonwebtoken.sign({
            user: user,
            user_role: "admin",
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 8)
        }, privateKey);
    }
};
//# sourceMappingURL=auth.service.js.map