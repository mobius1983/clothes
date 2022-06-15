import { ClassType } from 'type-graphql';
import { NavigateToItem } from 'typescript';
import { PingResolver } from './ping.resolver';

type NonEmptyArray<TITem> = readonly [TITem, ...TITem[]];

const resolvers: NonEmptyArray<ClassType> = [PingResolver];

export default resolvers;
