import { CvComponent } from '@/components/cv-component';
import { fetchCvData } from './fetch-cv-data';

export const CvContainer = async (): Promise<React.JSX.Element> => {
  const cvFragment = await fetchCvData();

  return <CvComponent cvFragment={cvFragment} />;
};
