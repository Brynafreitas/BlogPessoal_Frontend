import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem{
    public id: number;
    public date: Date;
    public texto: string;
    public titulo: string;
    public curtidas: number;
    public usuario: User;
    public tema: Tema
}