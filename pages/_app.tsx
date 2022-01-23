import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { AppLayout } from '../src/Layouts/AppLayout';
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AppLayout>
        <div className='container heightContainer'>
          <Component { ...pageProps } />
        </div>
      </AppLayout>
    </NextUIProvider>
  );
}

export default MyApp;
