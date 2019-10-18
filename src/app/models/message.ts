import { User } from './user';

export class Message{
    public id : number;
    public sender : User;
    public reciever : User;
    public text : string;
    public message : Message;
    public images : {id : number, link : string}[];
    public audios : {id : number, link : string}[];
    public videos : {id : number, link : string}[];
    public date : {
        year : number,
        month : number, 
        day : number, 
        hour : number,
        minute : number,
        second : number};
}