import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 text-gray-800 flex flex-col">
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-6">
          Tourify
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-600">
          Discover, create, and share unforgettable travel experiences across the world.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/tours"
            className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Explore Tours
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <section className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden text-center">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt=""
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 text-emerald-700">
              Discover Tours
            </h2>
            <p className="text-gray-600">
              Browse curated tours created by travelers and locals worldwide.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden text-center">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt=""
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 text-emerald-700">
              Plan Smarter
            </h2>
            <p className="text-gray-600">
              Find tours that match your interests, budget, and schedule.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden text-center">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
            alt=""
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 text-emerald-700">
              Stay Connected
            </h2>
            <p className="text-gray-600">
              Save favorites and access your tours anytime, anywhere.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-emerald-100 text-center py-6">
        <p className="text-gray-500 text-sm">
          © 2025 Tourify. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;


