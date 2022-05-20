
export default interface JwtRepository{
    createToken(carrier:string, id:string):string;
}