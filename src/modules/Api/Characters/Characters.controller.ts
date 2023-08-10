import { Body, Controller, Get, Post, Param, Query } from "@nestjs/common";
import { CharactersService } from "./Characters.service";
import { Character } from "./entities/Character.entity";
import { CreateCharacterDto } from "./dtos/create-character.dto";

@Controller("api/characters")
export class CharactersController {
    constructor(private charactersService: CharactersService) { }

    @Get()
    async findAll(@Query("house") house: string): Promise<Character[]> {
        const characters: Character[] = house ? await this.charactersService.findByHouse(house) : await this.charactersService.findAll()
        return characters
    }

    @Get(":id")
    async findById(@Param("id") id: string): Promise<Character> {
        const character: Character = await this.charactersService.findById(parseInt(id))
        return character
    }

    @Post()
    // Acá debemos ver cómo hacer para que se validen los datos del DTO
    async create(@Body() createCharacterDto: CreateCharacterDto): Promise<Character> {
        const character: Character = await this.charactersService.create(createCharacterDto)
        return character
    }
}