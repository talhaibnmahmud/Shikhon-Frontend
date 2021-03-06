import Link from 'next/link';

const Footer = () => {
    return(
        <footer className="bg-gray-800">
            <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="w-full bg-gray-800 text-white">
                    <div className="pb-12 px-3 sm:px-0">
                        <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-around">
                            <div className="w-full mb-3 sm:w-2/5 pr-6 flex flex-col space-y-4 font-raleway">
                                <h3 className="text-3xl font-siliguri font-semibold">শিখন একাডেমি</h3>
                                <p className="opacity-60 font-siliguri leading-4">কনকর্ড রয়্যাল কোর্ট (৩য় তলা) ধানমন্ডি, ঢাকা ১২০৯, বাংলাদেশ</p>
                            </div>
                            <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                                <FooterLink link="/about" text="About Us" />
                                <FooterLink link="/faq" text="FAQ" />
                                <FooterLink link="/services" text="Our Services" />
                                <FooterLink link="/contact" text="Contact" />
                            </div>
                            <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                                <FooterLink link="/issue" text="Report an issue" />
                                <FooterLink link="/support" text="Get Support" />
                                <FooterLink link="/privacy" text="Privacy Policy" />
                                <FooterLink link="/terms" text="Terms of Service" />
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


const FooterLink = ({ link, text }) => {
    return(
        <Link href={ link }>
            <a className="opacity-60"><span className="text-xl mr-2">&#8594;</span>{ text }</a>
        </Link>
    );
}


export default Footer;