import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsPositive, IsString, Min } from 'class-validator';
import { CreatePokemonDto } from './create-pokemon.dto';

// export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
//     @IsInt({message: `No: Se espera un numero entero`})
//     @IsPositive({message: `No: Se espera un numero positivo`})
//     @Min(1, {message: `No: Se espera un numero mayor o igual a 1`})
//     no?: number;

//     @IsString({message: `Name: Se espera un string`})
//     @Min(1,{message: `Name: Se espera una cadena de al menos un caracter`})
//     name?: string;
// }

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}