import { render, screen } from '@/testUtils';
import { graphql, HttpResponse } from 'msw';
import { server } from '@/mocks/node';
import { CvContainer } from './CvContainer';
import { mockCvData } from '@/mocks/graphql';

describe('CvContainer', () => {
  it('renders CvComponent when GraphQL returns data', async () => {
    server.use(
      graphql.query('GetCv', () => {
        return HttpResponse.json({ data: mockCvData });
      }),
    );

    render(await CvContainer());

    expect(screen.getByRole('heading', { name: 'On the web', level: 2 })).toBeInTheDocument();
  });

  it('displays error when GraphQL returns empty data', async () => {
    server.use(
      graphql.query('GetCv', () => {
        return HttpResponse.json({ data: { cvCollection: { items: [] } } });
      }),
    );

    render(await CvContainer());

    expect(screen.getByText(/No CV data found/)).toBeInTheDocument();
  });

  it('displays error when GraphQL returns null cvFragment', async () => {
    server.use(
      graphql.query('GetCv', () => {
        return HttpResponse.json({ data: { cvCollection: { items: [null] } } });
      }),
    );

    render(await CvContainer());

    expect(screen.getByText(/No CV data found/)).toBeInTheDocument();
  });

  it('displays error when GraphQL request fails', async () => {
    server.use(
      graphql.query('GetCv', () => {
        return HttpResponse.json({ errors: [{ message: 'Server error' }] }, { status: 500 });
      }),
    );

    render(await CvContainer());

    expect(screen.getByText(/Error loading CV data/)).toBeInTheDocument();
  });
});
