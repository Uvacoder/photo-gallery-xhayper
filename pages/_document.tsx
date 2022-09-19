import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import DefaultTheme from '../themes/default';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="icon" type="image/png" href="/favicon.png" />

                    <meta name="theme-color" content="#57739A" />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="hayper" />
                    <meta property="og:url" content="https://portfolio-xhayper.vercel.app" />
                    <meta property="og:image" content="https://portfolio-xhayper.vercel.app/gallery/hayper/WOOOO.png" />
                    <meta property="og:description" content="Furry | Backend developer" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="hayper" />
                    <meta name="twitter:site" content="@hayper1919" />
                    <meta name="twitter:description" content="Furry | Backend developer" />
                    <meta name="twitter:image" content="https://portfolio-xhayper.vercel.app/gallery/hayper/WOOOO.png" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={DefaultTheme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}