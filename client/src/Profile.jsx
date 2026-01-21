import { useAuth } from "./AuthContext";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 bg-green-50 font-semibold text-lg">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-4xl font-extrabold text-green-700 mb-8">Tourify Profile</h2>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-green-700 mb-6">User Info</h3>
          <p className="mb-4 text-lg font-medium">
            <span className="font-bold text-green-900">Email:</span> {user.email || "N/A"}
          </p>
          <p className="mb-4 text-lg font-medium">
            <span className="font-bold text-green-900">Full Name:</span> {user.fullname || "N/A"}
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold text-green-900">Verified:</span> {user.isVerified ? "Yes" : "No"}
          </p>
        </section>
      </main>
    </div>
  );
};

export default Profile;





