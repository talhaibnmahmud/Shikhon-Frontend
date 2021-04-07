import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Addcard from '../../components/AddCard';
import Layout from '../../components/Layout';


export default function Subject() {
    // const subjectList = new Set([
    //     "biology",
    //     "chemistry",
    //     "english",
    //     "ict",
    //     "math",
    //     "physics",
    // ]);

    const router = useRouter();
    const { subject } = router.query;

    // useEffect(() => {
    //     if (!subjectList.has(subject)) router.push('/');
    // }, [subject, ]);

    // console.log(subjectList);
    // console.log(subject);
    // console.log(subjectList.has(subject));

    return(
        <Layout title={ subject }>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="grid gap-5 my-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                    <Addcard subject={ subject }></Addcard>
                </div>
            </div>
        </Layout>
    );
}