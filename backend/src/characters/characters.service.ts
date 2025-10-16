// characters.service.ts
import { Character } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  constructor(private readonly database: DatabaseService) {}

  // ADD THIS CREATE METHOD - using your existing DatabaseService
  async create(characterData: {
    name: string;
    height: string;
    mass: string;
    hairColour: string;
    skinColour: string;
    eyeColour: string;
    gender: string;
  }): Promise<Character> {
    return this.database.character.create({
      data: characterData,
    });
  }

  list(): Promise<Character[]> {
    return this.database.character.findMany();
  }

  // You can also add other useful methods like:
  
  async findById(id: number): Promise<Character | null> {
    return this.database.character.findUnique({
      where: { id },
    });
  }

  async update(id: number, characterData: Partial<Character>): Promise<Character> {
    return this.database.character.update({
      where: { id },
      data: characterData,
    });
  }

  async delete(id: number): Promise<Character> {
    return this.database.character.delete({
      where: { id },
    });
  }
}