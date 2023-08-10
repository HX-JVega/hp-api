import { Module } from "@nestjs/common";
import { CharactersService } from "./Characters.service";
import { CharactersController } from "./Characters.controller";

@Module({
    imports: [],
    providers: [CharactersService],
    controllers: [CharactersController],
    exports: []
})

export class CharactersModule { }