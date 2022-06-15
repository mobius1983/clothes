import { Service } from 'typedi';
import { Resolver, Query } from 'type-graphql';
import { PingService } from '../../services/ping.service';

@Service()
@Resolver()
export class PingResolver {
  constructor(private readonly pingService: PingService) {}

  @Query(() => String)
  Ping(): string {
    this.pingService.getAll();

    return 'Pong';
  }
}
