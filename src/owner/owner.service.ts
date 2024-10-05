import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Owner } from './schemas/owner.schema';
import { Model } from 'mongoose';

@Injectable()
export class OwnerService {
  constructor(@InjectModel(Owner.name) private ownerModel: Model<Owner>) {}

  async create(owner: Owner): Promise<Owner> {
    return await this.ownerModel.create(owner);
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownerModel.find();
  }
}
