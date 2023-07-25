import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import CarsModule  from './cars/cars.module';
import SeedModule from './seed/seed.module'

@Module({
  imports: [CarsModule, BrandModule, SeedModule],
  controllers: [],
  providers: [],
  exports: []
})
export default class AppModule {}
