import { DatabaseService } from 'src/database/database.service';
import { Character, Like } from '@prisma/client';
export declare class UsersService {
    private readonly database;
    constructor(database: DatabaseService);
    listLikes(authorId: number): Promise<(Like & {
        character: Character;
    })[]>;
}
