import { Injectable } from '@nestjs/common';
import { Cat } from "./interfaces/cat.interface";
@Injectable()
export class CatsService {
    private cats : Cat[] = [];

    createCat(cat: Cat) {
        this.cats.push(cat);
    }

    findAll() : Cat[] {
        return this.cats;
    }
}
