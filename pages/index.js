import Card from '../components/HomeCard';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className="container bg-coolGray-50">
      <Layout title="Home">
        <div>
          <div>
            <h2 className="text-gray-900 text-3xl text-center font-semibold m-3">Our Courses</h2>

            <div className="mx-4 sm:mx-6 lg:mx-8">
              <Card className="max-w-md w-full lg:flex" subject="ICT">
              </Card>
              <Card className="max-w-md w-full lg:flex" subject="Physics"></Card>
              <Card className="max-w-md w-full lg:flex" subject="Chemistry"></Card>
              <Card className="max-w-md w-full lg:flex" subject="Biology"></Card>
              <Card className="max-w-md w-full lg:flex" subject="Mathematics"></Card>
              <Card className="max-w-md w-full lg:flex" subject="English"></Card>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
