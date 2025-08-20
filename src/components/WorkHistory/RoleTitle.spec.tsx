import { render, screen } from 'src/testUtils';
import { RoleTitle } from './RoleTitle';

describe('RoleTitle', () => {
  it('renders role title text', () => {
    render(<RoleTitle roleTitle="Senior Software Engineer" />);
    
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
  });

  it('handles undefined role title', () => {
    render(<RoleTitle roleTitle={undefined} />);
    
    expect(screen.queryByText(/Engineer/)).not.toBeInTheDocument();
  });

  it('handles empty role title', () => {
    const { container } = render(<RoleTitle roleTitle="" />);
    
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies correct font weight styling', () => {
    render(<RoleTitle roleTitle="Test Role" />);
    
    const roleElement = screen.getByText('Test Role');
    expect(roleElement).toHaveClass('chakra-text');
  });

  it('renders long role titles', () => {
    const longTitle = 'Senior Principal Staff Software Development Engineer Lead Architect';
    render(<RoleTitle roleTitle={longTitle} />);
    
    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });

  it('handles special characters in role title', () => {
    const titleWithSpecialChars = 'C++ Developer & Technical Lead';
    render(<RoleTitle roleTitle={titleWithSpecialChars} />);
    
    expect(screen.getByText(titleWithSpecialChars)).toBeInTheDocument();
  });
});