'use client';

import { Link } from '@chakra-ui/react';
import type { Maybe, OnTheWebFragment } from '@/graphql/generated/graphql';
import { SectionHeading } from '../SectionHeading';

export type OnTheWebProps = {
  items?: Array<Maybe<OnTheWebFragment>>;
};

export const OnTheWeb = ({ items }: OnTheWebProps): React.JSX.Element => (
  <>
    <SectionHeading heading={'On the web'} />
    <ul>
      {items?.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item?.url ?? undefined}
            target={'_blank'}
            fontSize={'sm'}
            lineHeight={'110%'}
          >
            {item?.linkText}
          </Link>
        </li>
      ))}
    </ul>
  </>
);
