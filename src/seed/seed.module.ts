import { Module } from "@nestjs/common";
import { SeedController } from './seed.controller'
import { SeedService } from './seed.service'
import CarsModule from "@cars/cars.module";
import { BrandModule } from "@/brand/brand.module";

@Module({
    controllers: [SeedController],
    providers: [SeedService],
    imports: [ CarsModule, BrandModule ],
})
export default class SeedModule {}