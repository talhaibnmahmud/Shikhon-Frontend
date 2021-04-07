import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Layout from '../../components/Layout';


export default function Subject() {
    const subjectList = new Set([
        "biology",
        "chemistry",
        "english",
        "ict",
        "math",
        "physics",
    ]);

    const router = useRouter();
    const { subject } = router.query;

    useEffect(() => {
        if (!subjectList.has(subject)) router.push('/');
    });

    return(
        <Layout title={ subject }></Layout>
    );
}