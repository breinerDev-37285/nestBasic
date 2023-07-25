import { Controller, Get } from "@nestjs/common";
import SeedService from "./seed.service";

@Controller('seed')
export class SeedController {

    constructor(private readonly service:SeedService){}

    @Get()
    getSeed(){
        return this.service.populateDB();
    }
}

export default SeedController