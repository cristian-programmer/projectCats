import { Controller, Get, Post, Put, Delete, HttpCode, Param, Body } from '@nestjs/common';
import { CatDto } from './dtocat';

@Controller('cats')
export class CatsController {
    @Get()
    getAllCats(): string{
        return "hey";
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
