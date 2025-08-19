import { gql } from '@apollo/client';
import {
  OnTheWebFragmentDoc,
  ParagraphFragmentDoc,
  WorkHistoryFragmentDoc,
} from 'src/graphql-types';

export const GET_CV_PAGINATED = gql`
  query GetCvPaginated($workLimit: Int!, $workSkip: Int!) {
    cvCollection(limit: 1, where: { name: "Matt Calthrop" }) {
      items {
        image {
          url
        }
        overviewCollection {
          items {
            ...Paragraph
          }
        }
        onTheWebCollection {
          items {
            ...OnTheWeb
          }
        }
        interestsCollection {
          items {
            ...Paragraph
          }
        }
        educationCollection {
          items {
            ...Paragraph
          }
        }
        workHistoryPage: workHistoryCollection(
          limit: $workLimit
          skip: $workSkip
        ) {
          total
          skip
          limit
          items {
            ...WorkHistory
          }
        }
      }
    }
  }
  ${ParagraphFragmentDoc}
  ${OnTheWebFragmentDoc}
  ${WorkHistoryFragmentDoc}
`;
