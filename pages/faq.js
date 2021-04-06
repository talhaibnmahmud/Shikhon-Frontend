import FAQCard from '../components/FAQCard';
import Layout from '../components/Layout';


export default function Faq() {
    return(
        <Layout title="FAQ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="pt-10 min-h-screen">
                    <div className="mx-auto max-w-6xl">
                        <div className="p-2 rounded">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 p-4 text-sm">
                                    <div className="text-3xl">Frequently asked <span className="font-medium">Questions</span></div>
                                    <div className="my-2">Wondering how our service works ?</div>
                                    <div className="mb-2">Confused about how we can improve your business ?</div>
                                    <div className="text-xs text-gray-600">Dive into our FAQ for more details</div>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="p-4">
                                        <FAQCard title="How to install it with windows server ?" />
                                        <FAQCard title="How to use it with other integrations ?" />
                                        <FAQCard
                                            title="How to build an app ?"
                                            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?"
                                        />
                                        {/* <div className="mb-2">
                                            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                                                <div className="flex-auto">How to build an app ?</div>
                                                <div className="px-2 mt-1">
                                                    <div className="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-5 h-5">
                                                            <polyline points="18 15 12 9 6 15"></polyline>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2 text-left text-gray-800 mb-5 bg-white">Lorem, ipsum dolor sit amet consectetur <span className="font-bold">adipisicing elit</span>. Mollitia temporibus doloremque non eligendi unde ipsam? Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, veritatis officia fugiat cumque quaerat earum adipisci?</div>
                                        </div> */}
                                        <FAQCard title="How to download it ?" />
                                        <FAQCard title="How to use extensions ?" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}