import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Res,
  UseGuards,
  Query,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { Response } from 'express';
import { UserId } from '../user/decorators/user-id.decorator';
import { AdminGuard } from '../auth/guards/admin.guard';
import { Public } from '../auth/decorators/public.decorator';

@Controller('todo')
@ApiTags('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @UseGuards(AdminGuard)
  @ApiCreatedResponse({ type: TodoEntity })
  create(@Body() createTodoDto: CreateTodoDto, @UserId() userId: number) {
    return this.todoService.create(createTodoDto, userId);
  }

  @Get()
  @Public()
  @ApiOkResponse({ type: TodoEntity, isArray: true })
  @ApiHeader({ name: 'Content-Range', description: 'total number of todos' })
  async findAll(
    @Res({ passthrough: true }) res: Response,
    @Query('take', ParseIntPipe) take: number,
    @Query('skip', ParseIntPipe) skip: number,
  ) {
    const todos = await this.todoService.findAll(take, skip);
    const numTodos = await this.todoService.getNumberOfTodos();
    res.setHeader('Content-Range', numTodos);
    return todos;
  }

  @Get(':id')
  @ApiOkResponse({ type: TodoEntity })
  @ApiNotFoundResponse()
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const todo = await this.todoService.findOne(id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  @Put(':id')
  @UseGuards(AdminGuard)
  @ApiOkResponse({ type: TodoEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.remove(id);
  }
}
