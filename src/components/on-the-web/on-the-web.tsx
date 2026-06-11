import { Link } from '@chakra-ui/react';
import { Section } from '@/components/section';
import type { OnTheWebFragment } from '@/graphql/generated/graphql';

type OnTheWebProps = {
  items?: Array<OnTheWebFragment | null>;
};

export const OnTheWeb = ({ items }: OnTheWebProps): React.JSX.Element => (
  <Section heading={'On the web'}>
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
  </Section>
);
