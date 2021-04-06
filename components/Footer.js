import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="mx-2 py-5">
                    <h3 className="text-2xl text-gray-300 font-medium mb-5">Shikhon Academy</h3>
                    <div className="flex flex-col text-gray-400 text-base font-medium">
                        <Link href="/about">
                            <a className="py-3">About Shikhon Academy</a>
                        </Link>
                        <Link href="/support">
                            <a className="py-3">Get support</a>
                        </Link>
                        <Link href="/issue">
                            <a className="py-3">Report an issue</a>
                        </Link>
                        <Link href="/request-feature">
                            <a className="py-3">Request for a feature</a>
                        </Link>
                        <Link href="/faq">
                            <a className="py-3">FAQ</a>
                        </Link>
                    </div>
                </div>
                <hr className="bg-gray-800 text-gray-800" />
                <div className="text-sm text-gray-300 text-center p-2">
                    <p>Made with &hearts; remotely from Bangladesh</p>
                    <p>&copy; 2021. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}