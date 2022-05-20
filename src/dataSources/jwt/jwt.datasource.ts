import jwt from "jsonwebtoken"
import JwtRepository from "../../core/repositories/jwt.repository";


class Jwt implements JwtRepository {
    
    /**
     * Create token with carrierName and requestId
     * @param carrier 
     * @param id 
     * @returns 
     */
    public createToken(carrier:string, id:string):string{
        if (carrier && id){
            const token = jwt.sign(
                { carrierName: carrier,
                    requestId: id
                },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
            return token;
        }
        throw new Error(`Carrier and id expected`);
    }

    /**
     * Verify the token
     * @param token
     * @returns 
     */
    public verifyToken(token:string):any{
        if (token){
            try {
                const verification = jwt.verify(token, process.env.TOKEN_KEY);
                return verification;
            } catch(error){
                throw new Error(`Token verification fails`);
            }
        }
        throw new Error(`Token is needed`);
    }
}

export default Jwt