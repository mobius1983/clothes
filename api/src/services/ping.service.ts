import { Service } from 'typedi';

@Service()
export class PingService {
  getAll() {
    console.log('todo salio bien');
  }
}
