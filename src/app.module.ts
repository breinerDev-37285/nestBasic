import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import CarsModule  from './cars/cars.module';

@Module({
  imports: [CarsModule, BrandModule],
  controllers: [],
  providers: [],
  exports: []
})
export default class AppModule {}
