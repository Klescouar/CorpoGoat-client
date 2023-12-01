import type { Metadata } from 'next';
import './globals.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: 'CorpoGoat',
  description: "Game On: Who's the Best Player in the Office?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <UserProvider>
        <body>
          <MantineProvider>{children}</MantineProvider>
        </body>
      </UserProvider>
    </html>
  );
}
