import Link from 'next/link';

import Layout from '../components/Layout';


export default function Settings() {
    return(
        <Layout title="Support">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <section className="min-h-screen flex items-center justify-center px-4 bg-white">
                    <div className="max-w-lg w-full rounded-lg shadow-lg p-4">
                        <h3 className="font-semibold text-lg tracking-wide">Welcome to Shikhon Academy</h3>
                        <p className="text-gray-500 my-1">
                            This page is still under development. Please stay with us to always get the latest from
                            Shikhon Academy
                        </p>
                        <div className="mt-2">
                            <Link href="/">
                            <a className="text-indigo-600  inline-flex items-center font-semibold tracking-wide">
                                <span className="hover:underline">
                                    Continue to Homepage
                                </span>
                                <span className="text-xl ml-2">&#8594;</span>
                            </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}