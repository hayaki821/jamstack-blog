import { MicroCMSQueries } from 'microcms-js-sdk';
import { EndPoints } from 'microCMS/types/response';

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: EndPoints['gets']['tags'];
  };
};
