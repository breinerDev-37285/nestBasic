import { Injectable } from '@nestjs/common';

interface Cars {
    id: number;
    brand: string;
    model: string;
    [x: string]: string | number;
}

@Injectable()
export class CarsService {
    public cars: Cars[];

    constructor() {
        this.cars = [
            {
                "id": 1,
                "brand": "Toyota",
                "model": "Corolla"
            },
            {
                "id": 2,
                "brand": "Honda",
                "model": "Civic"
            },
            {
                "id": 3,
                "brand": "Jeep",
                "model": "Cherokee"
            }
        ];
    }

    findAll() {
        return this.cars;
    }

    findById(idParam: number) {
        return this.cars.find(({ id }) => id === idParam)
    }
}
