import React, { useEffect, useState } from "react";

const Home = () => {
  const [showData, setShowData] = useState(true);
  const [data, setData] = useState([]);

  const API_URL = "http://localhost:5001/students";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          setShowData(false);
          return;
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setShowData(false);
      }
    };

    fetchData(); // you forgot to call the function inside useEffect
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-between p-4">
      <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-2xl mb-8">
        {showData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((value, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md bg-indigo-50 hover:bg-indigo-100 transition transform hover:scale-105"
              >
                <p className="text-indigo-700 text-xl font-bold text-center mb-2">Name: {value.name}</p>
                <p className="text-gray-600 text-md text-center">CollegeName: {value.collegeName}</p>
                <p className="text-gray-600 text-md text-center">Domain: {value.domain}</p>
                <p className="text-gray-600 text-md text-center">Degree: {value.degree}</p>
                <p className="text-gray-600 text-md text-center">Age: {value.age}</p>
                <p className="text-gray-600 text-md text-center">📞: {value.number}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-indigo-300 rounded-lg p-8 bg-indigo-50 flex justify-center items-center min-h-[150px]">
            <p className="text-indigo-700 text-lg font-medium">
              📦 Data will be displayed here...
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-4 mt-auto">
        <div className="w-full max-w-4xl mx-auto text-center text-gray-700">
          <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Rohan. All rights reserved.</p>
          <p className="text-md">This app is designed and created by Rohan</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
