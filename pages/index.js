import Link from 'next/link';

import Card from '../components/HomeCard';
import Layout from '../components/Layout';

export default function Home() {
  return (
      <Layout title="Home">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block tracking-wide">Ready to dive in?</span>
                <span className="block tracking-wide text-indigo-600">Start your free trial today.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link href="/login">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Log in
                  </a>
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link href="/signup">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                    Sign Up
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-gray-900 text-3xl text-center font-semibold m-3">Our Courses</h2>

            <div className="md:grid md:grid-cols-2">
              <Card className="max-w-md w-full lg:flex" subject="ICT" icon="ict.svg"></Card>
              <Card className="max-w-md w-full lg:flex" subject="Physics" icon="physics.svg"></Card>
              <Card className="max-w-md w-full lg:flex" subject="Chemistry" icon="chemistry.svg"></Card>
              <Card className="max-w-md w-full lg:flex" subject="Biology" icon="biology.svg"></Card>
              <Card className="max-w-md w-full lg:flex" subject="Mathematics" icon="math.svg"></Card>
              <Card className="max-w-md w-full lg:flex" subject="English" icon="english.svg"></Card>
            </div>
          </div>
        </div>
      </Layout>
  )
}
