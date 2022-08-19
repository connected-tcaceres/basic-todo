import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTodoDto: CreateTodoDto, ownerId: number) {
    return this.prismaService.todo.create({
      data: { ...createTodoDto, ownerId },
    });
  }

  findAll(take: number, skip: number) {
    return this.prismaService.todo.findMany({ take, skip });
  }

  getNumberOfTodos() {
    return this.prismaService.todo.count();
  }

  findOne(id: number) {
    return this.prismaService.todo.findUnique({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prismaService.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.todo.delete({ where: { id } });
  }
}
