import Link from 'next/link';

import Layout from '../components/Layout';


export default function Profile() {
    return(
        <Layout title="User Profile">
            <div className="">
                <div className="containe max-w-7xl mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2">
                        {/* <!-- Left Side --> */}
                        <div className="bg-white w-full md:w-3/12 md:mx-2 rounded-sm shadow-sm">
                            {/* <!-- Profile Card --> */}
                            <div className="p-3 rounded-t-md border-t-4 border-indigo-600">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto rounded-md"
                                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                        alt="" />
                                </div>
                                <h1 className="text-gray-800 font-poppins tracking-wide font-bold text-xl leading-8 mt-2">Jane Doe</h1>
                                <h3 className="text-gray-600 font-lg text-semibold leading-6">Khulna University of Engineering & Technology</h3>
                                <p className="text-sm text-gray-500 leading-6 mt-4">
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                                className="bg-green-600 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Member since</span>
                                        <span className="ml-auto">Nov 07, 2016</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End of profile card --> */}
                            <div className="my-4"></div>
                        </div>
                        {/* <!-- Right Side --> */}
                        <div className="w-full md:w-9/12 md:mx-2">
                            {/* <!-- Profile tab --> */}
                            {/* <!-- About Section --> */}
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 px-4 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name</div>
                                            <div className="px-4 py-2">Jane</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <div className="px-4 py-2">Doe</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Gender</div>
                                            <div className="px-4 py-2">Female</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                                            <div className="px-4 py-2">+880 1XXX XX XX XX</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Current Address</div>
                                            <div className="px-4 py-2">KUET Road, Teligati, Khulna</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                            <div className="px-4 py-2">Lalmatia, Dhanmondi, Dhaka</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email.</div>
                                            <div className="px-4 py-2">
                                                <a className="text-indigo-600 hover:text-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="mailto:jane@example.com">jane@shikhon.com</a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Birthday</div>
                                            <div className="px-4 py-2">Feb 06, 1998</div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="block w-full bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-xs p-3 my-4">
                                        Edit Profile
                                </button>
                            </div>
                            {/* <!-- End of about section --> */}

                            <div className="my-4"></div>

                            {/* <!-- Experience and education --> */}
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="p-4 grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Education</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            <li>
                                                <div className="text-indigo-500">Cantonment Public School, Mymensingh</div>
                                                <div className="text-gray-500 text-xs">March 2015 - SSC</div>
                                            </li>
                                            <li>
                                                <div className="text-indigo-500">Shahid Syed Nazrul Islam College</div>
                                                <div className="text-gray-500 text-xs">June 2027 - HSC</div>
                                            </li>
                                            <li>
                                                <div className="text-indigo-500">Khulna University of Engineering & Technology</div>
                                                <div className="text-gray-500 text-xs">March 2028 - Now (B.Sc)</div>
                                            </li>
                                            <li>
                                                <div className="text-indigo-500">Khulna University of Engineering & Technology</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span className="tracking-wide">Experience</span>
                                        </div>
                                        <ul className="list-inside space-y-2">
                                            <li>
                                                <div className="text-indigo-500">Masters Degree in Oxford</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                            <li>
                                                <div className="text-indigo-500">Bachelors Degreen in LPU</div>
                                                <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End of Experience and education grid --> */}
                            </div>
                            {/* <!-- End of profile tab --> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}