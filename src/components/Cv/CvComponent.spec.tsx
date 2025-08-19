import { render, screen } from 'src/testUtils';
import { CvComponent } from './CvComponent';

describe('CvComponent', () => {
  it('should render CV text', () => {
    const cv = {
      workHistoryCollection: { items: [] },
    } as unknown as Parameters<typeof CvComponent>[0]['cvFragment'];
    render(
      <CvComponent
        cvFragment={cv}
        workHistoryPagination={{ total: 0, skip: 0, limit: 5 }}
        onWorkHistoryFetchMore={() => console.log('fetch more')}
      />,
    );
    const textElement = screen.getByText(/CV: Matt Calthrop/);
    expect(textElement).toBeInTheDocument();
  });
});
