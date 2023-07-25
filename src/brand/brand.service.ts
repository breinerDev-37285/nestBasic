import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid'

@Injectable()
export class BrandService {

  private brands: Brand[];

  constructor() {
    this.brands = [{
      id: uuid(),
      name: 'Volkswagen',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: uuid(),
      name: 'Ford',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: uuid(),
      name: 'Honda',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: uuid(),
      name: 'Nissan',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: uuid(),
      name: 'Hyundai',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: uuid(),
      name: 'Chevrolet',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: uuid(),
      name: 'Kia',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
  }

  create(createBrandDto: CreateBrandDto): CreateBrandDto {
    const newBrand: Brand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: new Date(),
      updatedAt: new Date()
    } 
    this.brands.push( newBrand );
    
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand)  throw new BadRequestException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const newBrand: Brand = {
      ...brand,
      ...updateBrandDto,
    }
    this.brands = this.brands.map(item => item.id === id ? newBrand : item);
    return newBrand;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter(item => item.id !== id)
    return brand;
  }

  set brandsData(brands: Brand[]) {
    this.brands = brands;
  }
  
}
