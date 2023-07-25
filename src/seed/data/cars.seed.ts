import { Car } from "@cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid'

export const CARS_SEED: Car[] = [{
    id: uuid(),
    brand: 'BMW',
    model: 'X5',
}, {
    id: uuid(),
    brand: 'Audi',
    model: 'A4',
},{
    id: uuid(),
    brand: 'Mercedes',
    model: 'C-Class',
},{
    id: uuid(),
    brand: 'Volkswagen',
    model: 'Golf',
},{
    id: uuid(),
    brand: 'Ford',
    model: 'Focus',
},{
    id: uuid(),
    brand: 'Skoda',
    model: 'Octavia',
}, {
    id: uuid(),
    brand: 'Opel',
    model: 'Astra',
},{
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
},{
    id: uuid(),
    brand: 'Renault',
    model: 'Clio',
},{
    id: uuid(),
    brand: 'Peugeot',
    model: '208',
}]