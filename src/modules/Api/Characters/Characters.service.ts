import { Injectable } from "@nestjs/common";
import { Character } from "./entities/Character.entity";
import { CreateCharacterDto } from "./dtos/create-character.dto";

@Injectable()
export class CharactersService {
    repository: Character[]

    constructor() {
        this.repository = [{
            id: 1,
            name: "Harry Potter",
            age: 11,
            alive: true,
            house: "Gryffindor"
        },
        {
            id: 2,
            name: "Draco Malfoy",
            age: 11,
            alive: true,
            house: "Slytherin"
        }]
    }

    // TODO - Listar todos los personajes
    async findAll(): Promise<Character[]> {
        return this.repository
    }

    // TODO - Obtener un personaje por ID
    async findById(id: number): Promise<Character> {
        return this.repository.find(char => char.id === id)
    }

    // TODO - Obtener todos los personajes por casa
    async findByHouse(house: string): Promise<Character[]> {
        return this.repository.filter(char => char.house === house)
    }

    // TODO - Crear un personaje nuevo
    async create(createCharacterDto: CreateCharacterDto): Promise<Character> {

        const { name, house, alive, age } = createCharacterDto

        const newCharacter: Character = {
            id: this.repository.length + 1,
            name,
            house,
            alive,
            age
        }

        this.repository.push(newCharacter)

        return newCharacter
    }

    // TODO - Eliminar un personaje 

}