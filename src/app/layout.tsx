import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { ChakraWrapper } from '@/app/chakra-wrapper';

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
        // biome-ignore lint/security/noDangerouslySetInnerHtml: only way to add Google analytics
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
