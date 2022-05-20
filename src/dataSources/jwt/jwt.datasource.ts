import jwt from "jsonwebtoken"
import JwtRepository from "../../core/repositories/jwt.repository";


class Jwt implements JwtRepository {
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
}

export default Jwt