import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="bg-gray-800">
            <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="w-full bg-gray-800 text-white">
                    <div className="pb-12 px-3 sm:px-0">
                        <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-around">
                            <div className="w-full mb-3 sm:w-2/5 pr-6 flex flex-col space-y-4 font-raleway">
                                <h3 className="text-2xl font-semibold">Shikhon Academy</h3>
                                <p className="opacity-60">Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209, Bangladesh.</p>
                            </div>
                            <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                                <Link href="/about">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>About Us</a>
                                </Link>
                                <Link href="/faq">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>FAQ</a>
                                </Link>
                                <Link href="/services">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>Our Services</a>
                                </Link>
                                <Link href="/contact">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>Contact</a>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                                {/* <a className="opacity-60">Disclaimer</a>
                                <a className="opacity-60">Testimonials</a> */}
                                <Link href="/issue">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>Report an issue</a>
                                </Link>
                                <Link href="/support">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>Get Support</a>
                                </Link>
                                <Link href="/privacy">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>Privacy Policy</a>
                                </Link>
                                <Link href="/terms">
                                    <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>Terms of Service</a>
                                </Link>
                            </div>
                            <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                                <div className="flex flex-row space-x-4">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-google"></i>
                            </div>
                        </div>
                    </div>
                        <hr className="opacity-25 my-5" />
                        <div className="opacity-60 tracking-tight font-raleway font-light text-center sm:flex sm:justify-between">
                            <p>Made with <span className="text-rose-500">&hearts;</span> remotely from Bangladesh</p>
                            <p>© 2021 Shikhon academy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}