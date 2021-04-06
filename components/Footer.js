import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="bg-gray-800">
            <div className="">
                <div className="w-full bg-gray-800 text-white">
                    <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                        <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
                        <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                            <h3 className="text-2xl font-raleway font-semibold">Shikhon Academy</h3>
                            <p className="opacity-60">Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209, Bangladesh.</p>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                            <Link href="/about"><a className="opacity-60">About Us</a></Link>
                            <a className="opacity-60">Responsibilities</a>
                            <a className="opacity-60">Out Services</a>
                            <Link href="/contact"><a className="opacity-60">Contact</a></Link>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                            {/* <a className="opacity-60">Disclaimer</a>
                            <a className="opacity-60">Testimonials</a> */}
                            <Link href="/issue"><a className="opacity-60">Report an issue</a></Link>
                            <Link href="/support"><a className="opacity-60">Get Support</a></Link>
                            <a className="opacity-60">Privacy Policy</a>
                            <a className="opacity-60">Terms of Service</a>
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
                        <div className="opacity-60 tracking-tight font-light text-center sm:flex sm:justify-between">
                            <p>Made with <span className="text-rose-500">&hearts;</span> remotely from Bangladesh</p>
                            <p>© 2021 Shikhon academy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}