import { DatabaseService } from '../database/database.service';
import { Like } from '@prisma/client';
export declare class LikesService {
    private readonly database;
    constructor(database: DatabaseService);
    create(characterId: number, authorId: number): Promise<Like>;
    list(characterId: number, authorId: number): Promise<Like[]>;
    count(characterId: number, authorId: number): Promise<number>;
}
