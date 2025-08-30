import { createApolloClient } from '@/graphql';
import { GetCvDocument, type GetCvQuery } from '@/graphql-types';
import { CvComponent } from './CvComponent';

export const CvContainer = async (): Promise<React.JSX.Element> => {
  const client = createApolloClient();

  try {
    const { data } = await client.query<GetCvQuery>({
      query: GetCvDocument,
    });

    if (!data?.cvCollection || data.cvCollection.items.length < 1) {
      return <div>No CV data found</div>;
    }

    const [cvFragment] = data.cvCollection.items;
    if (!cvFragment) {
      return <div>No CV data found</div>;
    }

    return <CvComponent cvFragment={cvFragment} />;
  } catch (error) {
    console.error('Error fetching CV data:', error);
    return <div>Error loading CV data</div>;
  }
};
