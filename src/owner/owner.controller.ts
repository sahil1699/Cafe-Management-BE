import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner } from './schemas/owner.schema';

@Controller('owner')
export class OwnerController {
  constructor(private ownerService: OwnerService) {}

  @Get()
  async findAll(): Promise<Owner[]> {
    return this.ownerService.findAll();
  }

  @Post('create')
  async create(
    @Body()
    owner,
  ): Promise<Owner> {
    return this.ownerService.create(owner);
  }
}
