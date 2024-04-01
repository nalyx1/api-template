import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilessModule } from './filess/filess.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BcryptModule } from './bcrypt/bcrypt.module';

@Module({
  imports: [UsersModule, FilessModule, PrismaModule, AuthModule, BcryptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
