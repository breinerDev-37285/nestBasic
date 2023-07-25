import { Car } from "@cars/interfaces/car.interface";
import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto implements Partial<Car> {
    
    @IsString()
    @IsUUID('4')
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;

}