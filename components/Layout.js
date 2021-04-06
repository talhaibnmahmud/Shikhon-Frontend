import Head from 'next/head';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Home({children, title}) {
    return (
        <div className="container mx-auto bg-coolGray-50">
            <Head>
                <title>Shikhon | { title }</title>
                <link rel="icon" type="image/png" href="/favicon.ico" />

                {/* Site Info */}
                <meta name="author" content="Talha Ibne Mahmud" />
                <meta name="application-name" content="Shikhon Academy" />
                <meta name="description"
                    content="Shikhon Academy is an online tuition and learning community primarily based on Bangladesh" />
                <meta name="keywords" content="Shikhon, Tuition, Online Tuition, Learning, Online Learning, Online Tutorial" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"></link>
            </Head>

            <Nav />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
}