import { BrandService } from "@/brand/brand.service";
import { CarsService } from "@/cars/cars.service";
import { Injectable } from "@nestjs/common";
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed'


@Injectable()
export class SeedService {

    constructor(
        private readonly CarService: CarsService,
        private readonly BrandService: BrandService
    ) {}

    populateDB() {

        this.CarService.carsData = CARS_SEED;
        this.BrandService.brandsData = BRAND_SEED;
        return 'Seed DB loaded sucessfully';
    }
}

export default SeedService;