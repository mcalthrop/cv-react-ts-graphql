import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WorkHistory } from './WorkHistory';
import type { WorkHistoryFragment } from 'src/graphql-types';

const makeItem = (overrides: Partial<WorkHistoryFragment> = {}): WorkHistoryFragment =>
  ({
    roleTitle: 'Engineer',
    employerName: 'ACME',
    employerUrl: 'https://example.com',
    location: 'Remote',
    dateFrom: '2020-01-01',
    dateTo: '2021-01-01',
    responsibilitiesCollection: { items: [] },
    skillSummary: [],
    ...overrides,
  }) as unknown as WorkHistoryFragment;

describe('WorkHistory', () => {
  it('shows a Fetch more button when hasMore is true and calls handler', async () => {
    const user = userEvent.setup();
    const onFetchMore = jest.fn();
    render(<WorkHistory items={[makeItem(), makeItem({ employerName: 'Beta' })]} hasMore onFetchMore={onFetchMore} />);

    // heading present
    expect(screen.getByText('Work history')).toBeInTheDocument();

    // button present
    const btn = screen.getByRole('button', { name: 'Fetch more' });
    expect(btn).toBeInTheDocument();

    await user.click(btn);
    expect(onFetchMore).toHaveBeenCalledTimes(1);
  });

  it('does not show a Fetch more button when hasMore is false', () => {
    render(<WorkHistory items={[makeItem()]} hasMore={false} />);
    expect(screen.queryByRole('button', { name: 'Fetch more' })).not.toBeInTheDocument();
  });
});
