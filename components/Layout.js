import Head from 'next/head';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Home = ({children, title}) => {
    return (
        <div className="container mx-auto bg-coolGray-50">
            <Head>
                <title>Shikhon | { title }</title>

                {/* Icons */}
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>

                {/* Site Info */}
                <meta name="author" content="Talha Ibne Mahmud" />
                <meta name="application-name" content="Shikhon Academy" />
                <meta name="description"
                    content="Shikhon Academy is an online tuition and learning community primarily based on Bangladesh" />
                <meta name="keywords" content="Shikhon, Tuition, Online Tuition, Learning, Online Learning, Online Tutorial" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Shikhon" />
                <meta name="twitter:creator" content="@talha1728" />
                <meta property="twitter:title" content="Shikhon Academy" />
                <meta property="twitter:image" content="https://shikhon.vercel.app/work.jfif" />
                <meta property="twitter:description" content="Shikhon Academy is an online tuition and learning community primarily based on Bangladesh" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Shikhon Academy" />
                <meta property="og:site_name" content="Shikhon Academy" />
                <meta property="og:url" content="https://shikhon.vercel.app/" />
                <meta property="og:image" content="https://shikhon.vercel.app/work.jfif" />
                <meta property="og:description" content="Shikhon Academy is an online tuition and learning community primarily based on Bangladesh" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&family=Baloo+Da+2:wght@400;500;600;700;800&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
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


export default Home;
