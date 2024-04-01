import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BcryptModule } from './bcrypt/bcrypt.module';

@Module({
  imports: [UsersModule, FilesModule, PrismaModule, AuthModule, BcryptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
