import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href={"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght@300&display=optional"} rel="stylesheet"/>
                    <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet"></link>
                    <body>
                        <Main/>
                        <NextScript/>
                    </body>
                </Head>
            </Html>
        );
    }
}