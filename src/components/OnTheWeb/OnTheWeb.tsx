import { Heading, Link, List, ListItem } from '@chakra-ui/react';
import type { Maybe, OnTheWebFragment } from 'src/graphql-types';

type OnTheWebProps = {
  items?: Array<Maybe<OnTheWebFragment>>;
};

export function OnTheWeb({ items }: OnTheWebProps): JSX.Element {
  return (
    <>
      <Heading as={'h2'} size={'lg'} marginTop={3}>
        On the web
      </Heading>
      <List>
        {items?.map((item, idx) => (
          <ListItem key={idx}>
            <Link href={item?.url} target={'_blank'} fontSize={'sm'}>
              {item?.linkText}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
