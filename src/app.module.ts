import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TodosModule,
   MongooseModule.forRoot('mongodb+srv://sowerinchampion2_db_user:<db_password>@cluster0.djitil7.mongodb.net/?appName=Cluster0'),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
