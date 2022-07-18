import {
  Controller,
  Get,
  Put,
  Post,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { identity } from 'rxjs';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  // Create
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.service.create(createTodoDto);
  }

  // Read
  @Get()
  async index() {
    return this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  // Update
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateToDoDto: UpdateTodoDto) {
    return this.service.update(id, updateToDoDto);
  }

  // Delete
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
