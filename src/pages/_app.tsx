import '../styles/Globals.css';
import type { AppProps } from 'next/app';

import { storeWrapper } from '../state/store';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default storeWrapper.withRedux(MyApp);
