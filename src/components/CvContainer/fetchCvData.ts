'use server';

import { query } from '@/graphql';
import type { CvFragment } from '@/graphql/generated/graphql';
import { GetCvDocument, type GetCvQuery } from '@/graphql/generated/graphql';

export const fetchCvData = async (): Promise<CvFragment> => {
  const { data } = await query<GetCvQuery>({
    query: GetCvDocument,
  });

  if (!data?.cvCollection || data.cvCollection.items.length < 1) {
    throw Error('No CVs found');
  }

  const [cvFragment] = data.cvCollection.items;
  if (!cvFragment) {
    throw Error('Empty CV data');
  }

  return cvFragment;
};
