import { CvComponent } from '@/components/CvComponent';
import { fetchCvData } from './fetchCvData';

export const CvContainer = async (): Promise<React.JSX.Element> => {
  const cvFragment = await fetchCvData();

  return <CvComponent cvFragment={cvFragment} />;
};
