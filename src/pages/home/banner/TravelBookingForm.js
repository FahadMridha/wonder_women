import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { sampleData } from "../../../data/sampleData";


const TravelBookingForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);
  // const [availableDestinations, setAvailableDestinations] = useState(sampleData);
  const availableDestinations = [
    "Mystical Caves Exploration",
    "Countryside Retreat",
    "Island Paradise",
    "Adventure in the Desert",
    "Historical Landmarks Tour",
    "Luxury Lakeside Resort",
    "Lush Forest Retreat",
    "City Explorer",
    "Mountain Retreat",
    "Beautiful Beach Resort",
  ];
  

  const navigate = useNavigate();

  // Load form data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("travelFormData")) || [];
    const lastFormData = storedData[storedData.length - 1] || {};
    setDestination(lastFormData.destination || "");
    setName(lastFormData.name || "");
    setEmail(lastFormData.email || "");
    setPhone(lastFormData.phone || "");
    setDate(lastFormData.date || "");
  }, []);

  const handleSearch = () => {
    debugger;
    const filtered = availableDestinations.filter((dest) =>
      dest.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDestinations(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredDestinations([]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/booking");
    // If there's a search term, use the filtered destinations
    const selectedDestination = searchTerm
      ? filteredDestinations[0]
      : destination;

    // Here you can handle the form submission logic, e.g., sending data to an API
    // For this example, we'll just simulate a successful booking
    setBookingConfirmed(true);

    // Save form data to local storage
    const formData = {
      destination: selectedDestination,
      name,
      email,
      phone,
      date,
    };
    const storedData = JSON.parse(localStorage.getItem("travelFormData")) || [];
    const updatedData = [...storedData, formData];
    localStorage.setItem("travelFormData", JSON.stringify(updatedData));

    // Optionally, you can clear the search term and filtered destinations after submission
    setDestination("");
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setSearchTerm("");
    setFilteredDestinations([]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search destination..."
          className="p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(); // This line calls handleSearch when the input changes
          }}
        />
        {searchTerm && (
          <button
            className="absolute right-0 top-0 mr-4 mt-2 focus:outline-none focus:shadow-outline"
            onClick={handleClearSearch}
          >
            X
          </button>
        )}
      </div>
      {filteredDestinations.length > 0 && (
        <form onSubmit={handleFormSubmit}>
          {/* ... (form fields) */}
          <div className="mb-4">
            <select
              required
              className="p-2 border rounded w-full"
              value={filteredDestinations[0]}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              {filteredDestinations.map((dest, index) => (
                <option key={index} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="p-2 border rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              required
              placeholder="Your Email"
              className="p-2 border rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              required
              placeholder="Your Phone Number"
              className="p-2 border rounded w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              required
              className="p-2 border rounded w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      )}
      {isBookingConfirmed && (
        <p className="mt-4 text-green-600">Booking confirmed! 🎉</p>
      )}
    </div>
  );
};

export default TravelBookingForm;
