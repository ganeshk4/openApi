import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel("Cat")
    private catModel: Model<any>,
  ) {}

  async create(createCatDto: any): Promise<any> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<any[]> {
    return this.catModel.find().exec();
  }
}