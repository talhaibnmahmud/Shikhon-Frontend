import Head from 'next/head';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Home({children, title}) {
    return (
        <div>
            <Head>
                <title>Shikhon | { title }</title>
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>

            <Nav />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
}