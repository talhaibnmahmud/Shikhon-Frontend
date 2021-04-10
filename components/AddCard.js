import Link from 'next/link';


export default function Addcard({ subject }) {
    return(
        <div className="mx-auto m-3">
            <div className="bg-white rounded-md shadow-sm w-11/12 mx-auto">
                <div>
                    {/* <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="block rounded-t-md w-full h-48 object-cover" /> */}
                    <img src="/work.jfif" className="block rounded-t-md w-full h-48 object-cover" />
                </div>
                <div className="flex justify-start p-3">
                    <div className="relative">
                        <div className="absolute w-3 h-3 right-0 top-1/4 transform translate-x-1/3 bg-green-600 rounded-full border border-gray-100"></div>
                        {/* <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" className="h-12 w-12 rounded-full object-cover" /> */}
                        <img src="/profile.jfif" className="h-12 w-12 rounded-full object-cover" />
                    </div>
                    <div className="mx-3">
                        <h3 className="text-lg text-gray-800 font-medium">Jane Doe</h3>
                        <p className="capitalize text-sm text-gray-400 leading-3">{ subject } Teacher</p>
                    </div>
                </div>
                <div className="px-3">
                    <p className="text-base text-gray-700 hover:text-indigo-600 font-medium tracking-wide leading-6">This page is still under development. Please stay with us to always get the latest from Shikhon Academy</p>
                    <div className="flex items-center text-indigo-600 my-5">
                        <span className="font-semibold">4.8</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-400">(47)</span>
                    </div>
                </div>
                <div className="flex justify-between bg-gray-100 text-gray-500 p-3 rounded-b-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="flex items-center">
                        <span className="text-sm uppercase mr-2">Starting at </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span className="text-lg text-gray-700 font-medium">100</span>
                    </p>
                </div>
            </div>
        </div>
    );
}