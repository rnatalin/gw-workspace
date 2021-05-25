import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Ta aqui pq bicho? Tem nada aqui nao kkk';
  }
}
