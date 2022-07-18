import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// Local MongoDB
// @Module({
//   imports: [TodoModule, MongooseModule.forRoot('mongodb://localhost/nest')],
//   controllers: [AppController],
//   providers: [AppService],
// })

// Cloud MongoDB
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TodoModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.01soq.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
