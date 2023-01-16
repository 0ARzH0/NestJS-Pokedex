import { IsPositive,IsInt, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsInt({message: `No: Se espera un numero entero`})
    @IsPositive({message: `No: Se espera un numero positivo`})
    @Min(1, {message: `No: Se espera un numero mayor o igual a 1`})
    no: number;

    @IsString({message: `Name: Se espera un string`})
    @MinLength(1,{message: `Name: Se espera una cadena de al menos un caracter`})
    name: string;
}
