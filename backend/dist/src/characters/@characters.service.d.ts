import { Character } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
export declare class CharactersService {
    private readonly database;
    constructor(database: DatabaseService);
    list(): Promise<Character[]>;
}
