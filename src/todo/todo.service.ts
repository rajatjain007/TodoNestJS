import { Injectable } from '@nestjs/common';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
  ) {}

  // Create
  async create(createToDoDto: CreateTodoDto): Promise<Todo> {
    return await new this.model({
      ...createToDoDto,
      createdAt: new Date(),
    }).save();
  }

  // Read
  async findAll(): Promise<Todo[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.model.findById(id).exec();
  }

  // Update
  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  // Delete
  async delete(id: string): Promise<Todo> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
