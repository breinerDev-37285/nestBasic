import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export default class CarsController {

    constructor( private readonly carsService: CarsService ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll() as any;
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number) {
        return this.carsService.findById( id ) as any;
    }

    @Post()
    createCar(@Body() body: any) {
        return body;
    }

    @Put(':id')
    updateCar(@Body() body:any, @Param('id', ParseIntPipe   ) id:number) {
        return {
            id,
            method: 'update',
            ...body
        }
    }

    @Delete(':id')
    deleteCar(@Param('id') id:number) {
        return {
            id,
            method: 'delete'
        }
    }

}