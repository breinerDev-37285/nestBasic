import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from '@cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import type { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
    public cars: Car[];

    constructor() {
        this.cars = [];	
    }

    findAllCars() {
        return this.cars;
    }

    findCarById(idParam: string): Car {
        const car = this.cars.find(({ id }) => id === idParam)
        if ( !car ) throw new NotFoundException(`Car with id: [${idParam}] Not Found`);
        return car
    }

    createCar( car: CreateCarDto ): CreateCarDto {
        const newCar = {id: uuid(), ...car} ;
        this.cars.push( newCar );
        return newCar;
    }

    updateCar( id: string, updateCar: UpdateCarDto ):UpdateCarDto {
        const carDB = this.findCarById( id );
        if( id !== carDB.id ) throw new BadRequestException(`Car with id: [${id}] Not Found`);
        const newUpdateCar = {...carDB, ...updateCar};
        this.cars = this.cars.map( car => car.id === id ? newUpdateCar: car );
        return newUpdateCar;  
    }

    deleteCar( id: string ):Car {
        const carDB = this.findCarById( id );
        this.cars = this.cars.filter( car => car.id !== id );
        return carDB;
    } 

    set carsData( cars: Car[] ) {
        this.cars = cars;
    }
}
