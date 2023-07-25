import type { Car } from '@cars/interfaces/car.interface'
import { IsString } from 'class-validator';

export class CreateCarDto implements Omit<Car, 'id'> {
    
    @IsString({message: 'The brand must be a string'})
    readonly brand: string;
    
    @IsString()
    readonly model: string;
}