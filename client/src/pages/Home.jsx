import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to Employee Data Management
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Manage your employees efficiently and effectively. Our platform
                provides powerful tools for organizing and tracking employee
                information.
              </p>
              <div className="mt-8">
                <p className="text-gray-600 mb-4">
                  ✓ Easy employee data management
                </p>
                <p className="text-gray-600 mb-4">
                  ✓ Secure and reliable platform
                </p>
                <p className="text-gray-600 mb-4">
                  ✓ Real-time updates and tracking
                </p>
              </div>
              <div className="mt-8">
                <Link to="/register">
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors cursor-pointer">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex-1">
              <img
                src={assets.heroImage}
                alt="Hero"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
