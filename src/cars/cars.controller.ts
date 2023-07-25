import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from '@cars/cars.service';
import { CreateCarDto, UpdateCarDto } from '@cars/dto';

@Controller('car')
// @UsePipes( ValidationPipe )
export default class CarsController {

    constructor( private readonly carsService: CarsService ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAllCars();
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return this.carsService.findCarById( id );
    }

    @Post()
    createCar(@Body() body: CreateCarDto) {
        const car = this.carsService.createCar( body );
        return car;
    }

    @Patch(':id')
    updateCar(@Body() body:UpdateCarDto, @Param('id', new ParseUUIDPipe({ version: '4' })) id) {
        return this.carsService.updateCar( id, body );
    }

    @Delete(':id')
    deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id) {
        return this.carsService.deleteCar( id );
    }

}