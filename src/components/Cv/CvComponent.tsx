import type { CvFragment } from 'src/graphql-types';

type CvComponentProps = {
  cvFragment: CvFragment;
};

export function CvComponent({ cvFragment }: CvComponentProps): JSX.Element {
  console.log('*** CvComponent', { cvFragment });

  return <>CV: Matt Calthrop</>;
}
