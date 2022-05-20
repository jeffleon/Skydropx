
export default interface JwtRepository{
    createToken(carrier:string, id:string):string;
    verifyToken(token:string):any;
}