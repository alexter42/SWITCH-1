import Query from './queries';
import Mutation from './mutations';
import Date from './scalar-date';
import Buffer from './scalar-buffer';
import JSON from './scalar-json';
import Types from './types';

export default {
  ...Types,
  JSON,
  Date,
  Query,
  Buffer,
  Mutation,
};
