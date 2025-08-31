import type { Metadata } from 'next';
import { ChakraWrapper } from '@/app/chakra-wrapper';
import type { PropsWithChildren } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'CV: Matt Calthrop',
  description: 'Online CV for Matt Calthrop, using React, TypeScript & GraphQL',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: PropsWithChildren): React.JSX.Element => (
  <html lang={'en'} suppressHydrationWarning>
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
      <ChakraWrapper>{children}</ChakraWrapper>
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
