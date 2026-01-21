import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const Tours = () => {
  const { user } = useAuth();

  const [tours, setTours] = useState([]);
  const [cart, setCart] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [buyMessage, setBuyMessage] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const savedTours = localStorage.getItem("tours");
    if (savedTours) setTours(JSON.parse(savedTours));

    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save tours and cart to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tours", JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add or update a tour
  const handleAddOrUpdateTour = (e) => {
    e.preventDefault();
    if (!title || !duration || !description || price === "") {
      alert("Please fill in all fields");
      return;
    }

    const numericPrice = Number(price);

    if (editingId !== null) {
      setTours(
        tours.map((tour) =>
          tour.id === editingId
            ? { ...tour, title, duration, description, price: numericPrice }
            : tour
        )
      );
      setEditingId(null);
    } else {
      setTours([
        ...tours,
        {
          id: Date.now(),
          title,
          duration,
          description,
          price: numericPrice,
          author: user?.fullname || "Anonymous", // ✅ use fullname here
        },
      ]);
    }

    setTitle("");
    setDuration("");
    setDescription("");
    setPrice("");
  };

  const handleDeleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleEditTour = (tour) => {
    setTitle(tour.title);
    setDuration(tour.duration);
    setDescription(tour.description);
    setPrice(tour.price);
    setEditingId(tour.id);
  };

  const handleAddToCart = (tour) => {
    if (cart.some((item) => item.id === tour.id)) {
      alert("Tour is already in the cart");
      return;
    }
    setCart([...cart, tour]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleBuy = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }
    setCart([]);
    setBuyMessage("Thank you for your purchase!");
    setTimeout(() => setBuyMessage(""), 3000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 via-green-50 to-green-100 text-gray-900 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Buy Message */}
        {buyMessage && <p className="text-green-700 font-bold">{buyMessage}</p>}

        {/* Available Tours */}
        <h2 className="text-3xl font-bold text-green-800">Available Tours</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Paris */}
          <div className="bg-white rounded-xl shadow-lg border border-green-300 p-5">
            <h3 className="text-xl font-semibold text-green-900">Paris City Highlights</h3>
            <span className="inline-block my-2 text-xs font-semibold text-white bg-green-600 px-2 py-1 rounded-full">Recommended</span>
            <p className="text-sm">Duration: 3 days</p>
            <p className="text-sm mb-2">Explore the Eiffel Tower, Louvre Museum, and Seine River cruise.</p>
            <p className="text-lg font-bold text-green-700">499$</p>
            <button
              onClick={() =>
                handleAddToCart({
                  id: "paris",
                  title: "Paris City Highlights",
                  duration: "3 days",
                  description: "Explore the Eiffel Tower, Louvre Museum, and Seine River cruise.",
                  price: 499,
                })
              }
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium"
            >
              Add to Cart
            </button>
          </div>

          {/* Rome */}
          <div className="bg-white rounded-xl shadow-lg border border-green-300 p-5">
            <h3 className="text-xl font-semibold text-green-900">Rome Historical Experience</h3>
            <span className="inline-block my-2 text-xs font-semibold text-white bg-green-600 px-2 py-1 rounded-full">Recommended</span>
            <p className="text-sm">Duration: 4 days</p>
            <p className="text-sm mb-2">Visit the Colosseum, Vatican City, and ancient Roman sites.</p>
            <p className="text-lg font-bold text-green-700">599$</p>
            <button
              onClick={() =>
                handleAddToCart({
                  id: "rome",
                  title: "Rome Historical Experience",
                  duration: "4 days",
                  description: "Visit the Colosseum, Vatican City, and ancient Roman sites.",
                  price: 599,
                })
              }
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium"
            >
              Add to Cart
            </button>
          </div>

          {/* Dubai */}
          <div className="bg-white rounded-xl shadow-lg border border-green-300 p-5">
            <h3 className="text-xl font-semibold text-green-900">Dubai Luxury Tour</h3>
            <span className="inline-block my-2 text-xs font-semibold text-white bg-green-600 px-2 py-1 rounded-full">Recommended</span>
            <p className="text-sm">Duration: 5 days</p>
            <p className="text-sm mb-2">Desert safari, Burj Khalifa, luxury shopping, and yacht cruise.</p>
            <p className="text-lg font-bold text-green-700">899$</p>
            <button
              onClick={() =>
                handleAddToCart({
                  id: "dubai",
                  title: "Dubai Luxury Tour",
                  duration: "5 days",
                  description: "Desert safari, Burj Khalifa, luxury shopping, and yacht cruise.",
                  price: 899,
                })
              }
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium"
            >
              Add to Cart
            </button>
          </div>

          {/* Bali */}
          <div className="bg-white rounded-xl shadow-lg border border-green-300 p-5">
            <h3 className="text-xl font-semibold text-green-900">Bali Island Escape</h3>
            <span className="inline-block my-2 text-xs font-semibold text-white bg-green-600 px-2 py-1 rounded-full">Recommended</span>
            <p className="text-sm">Duration: 6 days</p>
            <p className="text-sm mb-2">Beach resorts, temples, rice terraces, and local culture.</p>
            <p className="text-lg font-bold text-green-700">799$</p>
            <button
              onClick={() =>
                handleAddToCart({
                  id: "bali",
                  title: "Bali Island Escape",
                  duration: "6 days",
                  description: "Beach resorts, temples, rice terraces, and local culture.",
                  price: 799,
                })
              }
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Cart Panel */}
        <div className="bg-white p-5 rounded-xl shadow-lg border border-green-300">
          <h2 className="text-2xl font-bold text-green-800 mb-3">Cart ({cart.length})</h2>
          {cart.length === 0 ? (
            <p className="text-green-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-green-50 p-2 rounded">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.price}$</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={handleBuy}
                className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold"
              >
                Buy
              </button>
            </div>
          )}
        </div>

        {/* User-added tours */}
        <h2 className="text-3xl font-bold text-green-800 mt-10">Your Tours</h2>
        {tours.length === 0 ? (
          <p className="text-green-600">No tours available.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden border border-green-300">
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-green-900">{tour.title}</h3>
                  <p className="text-sm mb-1">
                    Duration: <span className="font-medium">{tour.duration}</span>
                  </p>
                  <p className="text-sm mb-2">
                    Description: <span className="font-medium">{tour.description}</span>
                  </p>
                  <p className="text-lg font-bold mb-2 text-green-700">{tour.price}$</p>
                  <p className="text-xs text-green-600 mb-4 font-semibold">Author: {tour.author}</p> {/* ✅ fullname */}

                  <div className="flex flex-wrap gap-2">
                    {tour.author === user?.fullname && (
                      <>
                        <button
                          onClick={() => handleEditTour(tour)}
                          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-1.5 rounded-lg text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTour(tour.id)}
                          className="flex-1 bg-red-600 hover:bg-red-700 py-1.5 rounded-lg text-sm font-medium"
                        >
                          Delete
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleAddToCart(tour)}
                      className="w-full bg-blue-600 hover:bg-blue-700 py-1.5 rounded-lg text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Admin Panel */}
        {user && (
          <div className="bg-white p-5 rounded-xl shadow-lg border border-green-300">
            <h2 className="text-2xl font-bold text-green-800 mb-3">Admin Panel</h2>
            <form onSubmit={handleAddOrUpdateTour} className="space-y-3">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-green-300 p-2 rounded"
              />
              <input
                type="text"
                placeholder="Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border border-green-300 p-2 rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-green-300 p-2 rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-green-300 p-2 rounded"
              />
              <button
                type="submit"
                className={`w-full py-2 rounded-lg font-bold ${
                  editingId ? "bg-yellow-400 hover:bg-yellow-500" : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {editingId ? "Update Tour" : "Add Tour"}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default Tours;










