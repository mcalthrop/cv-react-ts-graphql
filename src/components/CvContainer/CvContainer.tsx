import { query } from '@/graphql';
import { GetCvDocument, type GetCvQuery } from '@/graphql/generated/graphql';
import { CvComponent } from '@/components/CvComponent';

export const CvContainer = async (): Promise<React.JSX.Element> => {
  try {
    const { data } = await query<GetCvQuery>({
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
