import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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

}