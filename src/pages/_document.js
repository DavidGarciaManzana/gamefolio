import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <Head>


                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins&family=Roboto:wght@100&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
