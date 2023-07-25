import { Module } from '@nestjs/common';
import { CarsService } from '@cars/cars.service';
import CarsController from '@cars/cars.controller';

@Module({
  controllers: [CarsController],
  providers: [CarsService]
})
export default class CarsModule {}