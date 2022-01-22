import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {NextUIProvider} from '@nextui-org/react';
import {AppLayout} from '../src/Layouts/AppLayout';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <NextUIProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </NextUIProvider>
  );
}

export default MyApp;
