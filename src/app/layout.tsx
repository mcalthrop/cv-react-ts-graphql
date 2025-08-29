import type { Metadata } from 'next';
import { ApolloWrapper } from './apollo-wrapper';
import { ChakraWrapper } from './chakra-wrapper';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'CV: Matt Calthrop',
  description: 'Online CV for Matt Calthrop, using React, TypeScript & GraphQL',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: PropsWithChildren): React.JSX.Element => (
  <html lang={'en'}>
    <head>
      <link
        href={
          '//fonts.googleapis.com/css?family=Roboto:300,400,600&display=swap'
        }
        rel={'stylesheet'}
      />
      <script
        async
        src={'https://www.googletagmanager.com/gtag/js?id=G-9QDZHSX0GQ'}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "G-9QDZHSX0GQ");
            `,
        }}
      />
    </head>
    <body>
      <ApolloWrapper>
        <ChakraWrapper>{children}</ChakraWrapper>
      </ApolloWrapper>
    </body>
  </html>
);

export default RootLayout;
