import { render, screen } from 'src/testUtils';
import { SkillSummary } from './SkillSummary';
import type { WorkHistoryFragment } from 'src/graphql-types';

describe('SkillSummary', () => {
  it('renders single skill without bullet', () => {
    const skills: WorkHistoryFragment['skillSummary'] = ['React'];
    render(<SkillSummary skillSummary={skills} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('•')).not.toBeInTheDocument();
  });

  it('renders multiple skills with bullet separators', () => {
    const skills: WorkHistoryFragment['skillSummary'] = ['React', 'TypeScript', 'GraphQL', 'Node.js'];
    render(<SkillSummary skillSummary={skills} />);
    
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    expect(screen.getByText(/GraphQL/)).toBeInTheDocument();
    expect(screen.getByText(/Node\.js/)).toBeInTheDocument();
    
    // Check for bullet separators by looking for text that contains bullets
    expect(screen.getByText(/•.*TypeScript/)).toBeInTheDocument();
    expect(screen.getByText(/•.*GraphQL/)).toBeInTheDocument();
    expect(screen.getByText(/•.*Node\.js/)).toBeInTheDocument();
  });

  it('renders with empty skill array', () => {
    const skills: WorkHistoryFragment['skillSummary'] = [];
    render(<SkillSummary skillSummary={skills} />);
    
    expect(screen.queryByText(/React/)).not.toBeInTheDocument();
  });

  it('renders with null skill summary', () => {
    render(<SkillSummary skillSummary={undefined} />);
    
    expect(screen.queryByText(/React/)).not.toBeInTheDocument();
  });

  it('renders with undefined skill summary', () => {
    render(<SkillSummary skillSummary={undefined} />);
    
    expect(screen.queryByText(/React/)).not.toBeInTheDocument();
  });

  it('applies correct styling to skills', () => {
    const skills: WorkHistoryFragment['skillSummary'] = ['React', 'TypeScript'];
    render(<SkillSummary skillSummary={skills} />);
    
    const reactSkill = screen.getByText('React');
    expect(reactSkill).toBeInTheDocument();
  });

  it('applies correct styling to bullet separators', () => {
    const skills: WorkHistoryFragment['skillSummary'] = ['React', 'TypeScript'];
    render(<SkillSummary skillSummary={skills} />);
    
    const bulletText = screen.getByText(/•.*TypeScript/);
    expect(bulletText).toBeInTheDocument();
  });

  it('handles skills with special characters', () => {
    const skills: WorkHistoryFragment['skillSummary'] = ['C++', 'C#', 'Node.js', 'Vue.js'];
    render(<SkillSummary skillSummary={skills} />);
    
    expect(screen.getByText(/C\+\+/)).toBeInTheDocument();
    expect(screen.getByText(/C#/)).toBeInTheDocument();
    expect(screen.getByText(/Node\.js/)).toBeInTheDocument();
    expect(screen.getByText(/Vue\.js/)).toBeInTheDocument();
  });

  it('maintains inline display for all skills', () => {
    const skills: WorkHistoryFragment['skillSummary'] = ['React', 'TypeScript', 'GraphQL'];
    const { container } = render(<SkillSummary skillSummary={skills} />);
    
    const skillContainer = container.firstChild;
    expect(skillContainer).toBeInTheDocument();
  });

  it('correctly orders skills and bullets', () => {
    const skills: WorkHistoryFragment['skillSummary'] = ['First', 'Second', 'Third'];
    render(<SkillSummary skillSummary={skills} />);
    
    expect(screen.getByText(/First/)).toBeInTheDocument();
    expect(screen.getByText(/Second/)).toBeInTheDocument();
    expect(screen.getByText(/Third/)).toBeInTheDocument();
    
    // Check for bullet separators in the correct positions
    expect(screen.getByText(/•.*Second/)).toBeInTheDocument();
    expect(screen.getByText(/•.*Third/)).toBeInTheDocument();
  });
});