import Observable from 'zen-observable-ts';

import { CombinedError } from '../modules/error';
import { IOperation } from './operation';

type Scalar = string | number | boolean;

export interface IExecutionData {
  __typename?: string;
  [field: string]: IExecutionData | Scalar | Scalar[] | IExecutionData[];
}

// Adapted from: https://github.com/graphql/graphql-js/blob/ae5b163d2e6c124107fa0971f6d838c8a7d29f51/src/execution/execute.js#L105-L114<Paste>
export interface IExecutionResult {
  errors?: Error[];
  data?: IExecutionData;
}

export interface IExchangeResult {
  data: IExecutionResult['data'];
  error?: CombinedError;
  typeNames?: string[];
}

export type IExchange = (operation: IOperation) => Observable<IExchangeResult>;
