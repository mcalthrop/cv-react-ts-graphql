import { graphql, HttpResponse } from 'msw';
import type { GetCvQuery } from '@/graphql/generated/graphql';

export const mockCvData: GetCvQuery = {
  cvCollection: {
    items: [
      {
        image: { url: 'https://example.com/image.jpg' },
        overviewCollection: {
          items: [
            { para: 'Overview paragraph 1' },
            { para: 'Overview paragraph 2' },
          ],
        },
        onTheWebCollection: {
          items: [
            { linkText: 'GitHub', url: 'https://github.com/mcalthrop' },
            {
              linkText: 'LinkedIn',
              url: 'https://linkedin.com/in/mattcalthrop',
            },
          ],
        },
        workHistoryCollection: {
          items: [
            {
              roleTitle: 'Senior Software Engineer',
              employerName: 'Test Company',
              employerUrl: 'https://testcompany.com',
              viaEmployerName: 'Recruitment Agency',
              viaEmployerUrl: 'https://agency.com',
              location: 'London, UK',
              dateFrom: '2020-01',
              dateTo: 'Present',
              responsibilitiesCollection: {
                items: [
                  { para: 'Developed and maintained React applications' },
                  { para: 'Led technical architecture decisions' },
                ],
              },
              skillSummary: ['TypeScript', 'React', 'GraphQL', 'Node.js'],
            },
          ],
        },
        interestsCollection: {
          items: [
            { para: 'Photography and travel' },
            { para: 'Open source contributions' },
          ],
        },
        educationCollection: {
          items: [{ para: 'BSc Computer Science, University of Test' }],
        },
        sys: {},
      },
    ],
  },
};

export const graphqlHandlers = [
  graphql.query('GetCv', () => HttpResponse.json({ data: mockCvData })),
];
