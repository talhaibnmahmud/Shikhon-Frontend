import Link from 'next/link';


export default function HomeCard({subject, icon}) {
    return(
        <div className="my-8">
            <section className="flex items-center justify-center my-3 px-4">
                <div className="max-w-lg w-full rounded-lg shadow-lg p-4">
                    <h3 className="font-semibold text-lg lg:text-xl tracking-wide">{ subject }</h3>
                    <p className="text-gray-500 my-1">
                        This page is still under development. Please stay with us to always get the latest from
                        Shikhon Academy
                    </p>
                    <div className="mt-2">
                        <Link href={{ pathname: '/subject/[name]', query: {name: subject}, }}>
                        <a className="text-indigo-600  inline-flex items-center font-semibold tracking-wide">
                            <span className="hover:underline">
                                Continue to { subject }
                            </span>
                            <span className="text-xl ml-2">&#8594;</span>
                        </a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}