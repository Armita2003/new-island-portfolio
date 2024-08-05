import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang='en'>
            {/* <Head title='Armita Mir Portfolio' /> */}

            <Head title='Armita Mir Portfolio'>
                <link
                    rel='icon'
                    type='image/svg+xml'
                    href='./images/favicon.ico'
                />
                {/* <title>Armita Mir Portfolio</title> */}
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
