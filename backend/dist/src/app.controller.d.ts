import { Character, Like } from '@prisma/client';
import { CharactersService } from './characters/characters.service';
import { LikesService } from './likes/likes.service';
import { OpenAIService } from './openai/openai.service';
import { UsersService } from './users/users.service';
export declare class AppController {
    private readonly characters;
    private readonly likes;
    private readonly openai;
    private readonly users;
    constructor(characters: CharactersService, likes: LikesService, openai: OpenAIService, users: UsersService);
    createCharacter(characterData: {
        name: string;
        height: string;
        mass: string;
        hairColour: string;
        skinColour: string;
        eyeColour: string;
        gender: string;
    }): Promise<Character>;
    listCharacters(): Promise<Character[]>;
    likeCharacter(id: string): Promise<Like>;
    toggleLike(id: string): Promise<{
        liked: boolean;
    }>;
    getUserLikes(): Promise<{
        characterIds: number[];
    }>;
    listLikes(id: string): Promise<Like[]>;
    countLikes(id: string): Promise<number>;
    listUserLikes(id: string): Promise<(Like & {
        character: Character;
    })[]>;
    search(prompt: string): Promise<{
        content: string;
    }>;
}
