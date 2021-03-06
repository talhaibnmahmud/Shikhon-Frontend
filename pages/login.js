import Head from 'next/head';
import Link from 'next/link';


export default function Login() {
    return(
        <main className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Shikhon | Login</title>
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>

            <div className="max-w-md w-full space-y-8">
                <div>
                    <Link href="/">
                        <a>
                            <img className="mx-auto h-12 w-auto" src="/icon.svg"
                                alt="Shikhon" />
                        </a>
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        or&nbsp;
                        <Link href="/signup">
                            <a className="font-medium text-indigo-600 hover:text-indigo-500">Start your free 14 day trial</a>
                        </Link>
                    </p>
                </div>

                <form action="#" method="post" className="mt-8 space-y-6">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm">
                        <div className="my-5">
                            <label htmlFor="email-address" className="block mb-1 text-gray-800 text-base font-normal tracking-wide">
                                Email Address: 
                            </label>
                            <input type="email" name="email" id="email-address" autoComplete="email" required
                                className="appearance-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="example@email.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1 text-gray-800 text-base font-normal tracking-wide">Password: </label>
                            <input type="password" name="password" id="password" autoComplete="current-password" required
                                className="appearance-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input type="checkbox" name="remember_me" id="remember_me"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            className="relative group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}