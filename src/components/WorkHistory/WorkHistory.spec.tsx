import userEvent from '@testing-library/user-event';
import { render, screen } from 'src/testUtils';
import { WorkHistory } from './WorkHistory';

describe('WorkHistory', () => {
  it('shows Fetch more when hasMore and calls handler on click', async () => {
    const onFetchMore = jest.fn();
    render(<WorkHistory items={[]} pagination={{ total: 10, skip: 0, limit: 5 }} onFetchMore={onFetchMore} />);

    const button = screen.getByRole('button', { name: /fetch more/i });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(onFetchMore).toHaveBeenCalledTimes(1);
  });

  it('hides Fetch more when no more items', () => {
    render(<WorkHistory items={[]} pagination={{ total: 5, skip: 0, limit: 5 }} />);
    expect(screen.queryByRole('button', { name: /fetch more/i })).not.toBeInTheDocument();
  });
});
