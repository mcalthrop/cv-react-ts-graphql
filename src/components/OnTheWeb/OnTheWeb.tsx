import { Link } from '@chakra-ui/react';
import type { Maybe, OnTheWebFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';

type OnTheWebProps = {
  items?: Array<Maybe<OnTheWebFragment>>;
};

export function OnTheWeb({ items }: OnTheWebProps): JSX.Element {
  return (
    <>
      <SectionHeading heading={'On the web'} />
      <ul>
        {items?.map((item, idx) => (
          <li key={idx}>
            <Link href={item?.url} target={'_blank'} fontSize={'sm'}>
              {item?.linkText}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
