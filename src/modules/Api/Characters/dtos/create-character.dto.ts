import { IsString, IsNumber, IsBoolean, IsDefined } from "class-validator"

export class CreateCharacterDto {

    @IsDefined()
    @IsString()
    name: string

    @IsDefined()
    @IsString()
    house: string

    @IsDefined()
    @IsNumber()
    age: number

    @IsDefined()
    @IsBoolean()
    alive: boolean
}