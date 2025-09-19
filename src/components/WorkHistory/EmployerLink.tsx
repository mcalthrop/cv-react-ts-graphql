import { Heading, Link } from '@chakra-ui/react';
import { useMemo } from 'react';
import type { Maybe, WorkHistoryFragment } from '@/graphql/generated/graphql';

type EmployerLinkProps = {
  item: Maybe<WorkHistoryFragment>;
};

export const EmployerLink = ({
  item,
}: EmployerLinkProps): React.JSX.Element => {
  const viaEmployerElement = useMemo(() => {
    let element = <></>;

    if (!item?.viaEmployerName) {
      return element;
    }

    if (item?.viaEmployerUrl) {
      element = (
        <Link href={item.viaEmployerUrl} target={'_blank'}>
          {item.viaEmployerName}
        </Link>
      );
    } else {
      element = <>{item.viaEmployerName}</>;
    }

    return <> via {element}</>;
  }, [item?.viaEmployerName, item?.viaEmployerUrl]);

  const employerElement = useMemo(() => {
    if (item?.employerUrl) {
      return (
        <>
          <Link href={item.employerUrl} target={'_blank'}>
            {item.employerName}
          </Link>
          {viaEmployerElement}
        </>
      );
    }

    return (
      <>
        {item?.employerName}
        {viaEmployerElement}
      </>
    );
  }, [item?.employerName, item?.employerUrl, viaEmployerElement]);

  return (
    <Heading as={'h3'} size={'md'}>
      {employerElement}
    </Heading>
  );
};
