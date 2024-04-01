import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
  checkPassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
