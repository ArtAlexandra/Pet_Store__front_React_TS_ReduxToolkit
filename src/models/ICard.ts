import { IAnimal } from "./IAnimal";
import { IKind } from "./IKind";

export interface ICard{
    id_g:number;
    title:string;
    price:number;
    animalId:number;
    animal: IAnimal;
    quantity:number;
    description:string;
    mark:string;
    kindId:number;
    kind: IKind;
    image:String;
    imageString:string;
}


