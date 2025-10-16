import { Character } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
export declare class CharactersService {
    private readonly database;
    constructor(database: DatabaseService);
    create(characterData: {
        name: string;
        height: string;
        mass: string;
        hairColour: string;
        skinColour: string;
        eyeColour: string;
        gender: string;
    }): Promise<Character>;
    list(): Promise<Character[]>;
    findById(id: number): Promise<Character | null>;
    update(id: number, characterData: Partial<Character>): Promise<Character>;
    delete(id: number): Promise<Character>;
}
