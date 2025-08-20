import { graphql, HttpResponse } from 'msw';
import type { GetCvQuery } from '../graphql-types';

export const mockCvData: GetCvQuery = {
  cvCollection: {
    items: [
      {
        __typename: 'Cv',
        image: {
          __typename: 'Asset',
          url: 'https://example.com/image.jpg',
        },
        overviewCollection: {
          __typename: 'CvOverviewCollection',
          items: [
            {
              __typename: 'Paragraph',
              para: 'Overview paragraph 1',
            },
            {
              __typename: 'Paragraph',
              para: 'Overview paragraph 2',
            },
          ],
        },
        onTheWebCollection: {
          __typename: 'CvOnTheWebCollection',
          items: [
            {
              __typename: 'OnTheWeb',
              linkText: 'GitHub',
              url: 'https://github.com/mcalthrop',
            },
            {
              __typename: 'OnTheWeb',
              linkText: 'LinkedIn',
              url: 'https://linkedin.com/in/mattcalthrop',
            },
          ],
        },
        workHistoryCollection: {
          __typename: 'CvWorkHistoryCollection',
          items: [
            {
              __typename: 'WorkHistory',
              roleTitle: 'Senior Software Engineer',
              employerName: 'Test Company',
              employerUrl: 'https://testcompany.com',
              location: 'London, UK',
              dateFrom: '2020-01',
              dateTo: 'Present',
              responsibilitiesCollection: {
                __typename: 'WorkHistoryResponsibilitiesCollection',
                items: [
                  {
                    __typename: 'Paragraph',
                    para: 'Developed and maintained React applications',
                  },
                  {
                    __typename: 'Paragraph',
                    para: 'Led technical architecture decisions',
                  },
                ],
              },
              skillSummary: ['TypeScript', 'React', 'GraphQL', 'Node.js'],
            },
          ],
        },
        interestsCollection: {
          __typename: 'CvInterestsCollection',
          items: [
            {
              __typename: 'Paragraph',
              para: 'Photography and travel',
            },
            {
              __typename: 'Paragraph',
              para: 'Open source contributions',
            },
          ],
        },
        educationCollection: {
          __typename: 'CvEducationCollection',
          items: [
            {
              __typename: 'Paragraph',
              para: 'BSc Computer Science, University of Test',
            },
          ],
        },
      },
    ],
  },
};

export const graphqlHandlers = [
  graphql.query('GetCv', () => {
    return HttpResponse.json({
      data: mockCvData,
    });
  }),
];
