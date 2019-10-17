export class User{
    constructor(
    public id : number,
    public name : string,
    public login : string,
    public phone : string,
    public email : string,
    public token : string,
    public blackList : { blockedId : number }[],
    public contacts : { contactId : number }[],
    public ava : {id : number, link : string},
    public password : string,
    ){}
}