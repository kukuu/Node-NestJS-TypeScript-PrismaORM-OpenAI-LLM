import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Like } from '@prisma/client';

@Injectable()
export class LikesService {
  constructor(private readonly database: DatabaseService) {}

  async toggleLike(characterId: number, authorId: number = 1): Promise<{ liked: boolean; like?: Like }> {
    const existingLike = await this.database.like.findFirst({
      where: { characterId, authorId },
    });

    if (existingLike) {
      await this.database.like.delete({
        where: { id: existingLike.id },
      });
      return { liked: false };
    } else {
      const like = await this.database.like.create({
        data: { characterId, authorId },
      });
      return { liked: true, like };
    }
  }

  async getUserLikes(authorId: number = 1): Promise<number[]> {
    const likes = await this.database.like.findMany({
      where: { authorId },
      select: { characterId: true },
    });
    return likes.map(like => like.characterId);
  }

  create(characterId: number, authorId: number): Promise<Like> {
    return this.database.like.create({
      data: { characterId, authorId },
    });
  }

  list(characterId: number, authorId: number): Promise<Like[]> {
    return this.database.like.findMany({
      where: { characterId, authorId },
    });
  }

  count(characterId: number, authorId: number): Promise<number> {
    return this.database.like.count({
      where: { characterId, authorId },
    });
  }
}