import { MicroCMSObjectContent, MicroCMSQueries } from 'microcms-js-sdk';
import { EndPoints } from 'microCMS/types/response';

export type Methods = {
  get: {
    query?: Pick<MicroCMSQueries, 'draftKey' | 'fields' | 'depth'>;
    resBody: EndPoints['get']['blog'] & MicroCMSObjectContent;
  };
};
