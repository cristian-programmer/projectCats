import { Controller, Get, Post, Put, Delete, HttpCode, Param, Body } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CatDto } from './dto/dtocat';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get()
    getAllCats(): Cat []{
        return this.catsService.findAll();
    }

    @Get(":id")
    findCatById(@Param() params): string  {
        console.log(params.id);
        return "id " + params.id;
    }

    @Post()
    @HttpCode(201)
    saveCat(@Body() data:CatDto): string {
        console.log(data.name);
        this.catsService.createCat(data);

        return "created";
    }

    @Put(":id")
    updateCat(@Param() params) :string{
        return "update " + params.id;
    }

    @Delete(":id")
    deleteCatById(@Param() params) : string {
        return "delete " + params.id;
    }

}
