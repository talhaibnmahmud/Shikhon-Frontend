import Layout from '../components/Layout';


export default function Contact() {
    return(
        <Layout title="Contact">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center min-h-screen bg-gray-50">
                    <div className="container mx-auto">
                        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                            <div className="text-center">
                                <h1 className="my-3 text-3xl font-semibold text-gray-800">Contact Us</h1>
                                <p className="text-gray-400">Fill up the form below to send us a message.</p>
                            </div>
                            <div className="m-7">
                                <form method="POST" id="form">
                                    <input type="checkbox" name="botcheck" className="hidden" />

                                    <div className="my-5">
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Full Name</label>
                                        <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" />
                                    </div>
                                    <div className="my-5">
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="you@company.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" />
                                    </div>
                                    <div className="my-5">
                                        <label htmlFor="phone" className="block mb-2 text-sm text-gray-600">Phone Number</label>
                                        <input type="text" name="phone" id="phone" placeholder="+880 1XXX XX XX XX" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" />
                                    </div>
                                    <div className="my-5">
                                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Your Message</label>

                                        <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-600 focus:border-indigo-600" required></textarea>
                                    </div>
                                    <div className="my-5">
                                        <button type="submit" className="w-full py-4 px-4 border border-transparent font-medium rounded-md bg-indigo-600 tracking-wide text-base text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}