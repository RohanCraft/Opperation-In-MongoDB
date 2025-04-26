import React, { useEffect, useRef, useState } from "react";

const AddContent = () => {
  const nameRef = useRef();
  const collegeRef = useRef();
  const domainRef = useRef();
  const degreeRef = useRef();
  const ageRef = useRef();
  const numberRef = useRef();

  const [studentData, setStudentData] = useState([]);

  const API_URL = "http://localhost:5001/students";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const collegeName = collegeRef.current.value.trim();
    const domain = domainRef.current.value.trim();
    const degree = degreeRef.current.value.trim();
    const age = ageRef.current.value.trim();
    const number = numberRef.current.value.trim();

    if (!name || !collegeName || !domain || !degree || !age || !number) {
      alert("Please fill all fields!");
      return;
    }

    const addStudent = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            collegeName,
            domain,
            degree,
            age,
            number,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newData = await response.json();
        setStudentData([...studentData, newData]);

        // Clear inputs after successful submit
        nameRef.current.value = "";
        collegeRef.current.value = "";
        domainRef.current.value = "";
        degreeRef.current.value = "";
        ageRef.current.value = "";
        numberRef.current.value = "";
      } catch (error) {
        console.error("Error while saving data:", error);
      }
    };

    addStudent();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-indigo-600 text-center mb-10">
          Add New Student
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              ref={nameRef}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">College Name</label>
            <input
              type="text"
              placeholder="Enter your college name"
              ref={collegeRef}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Domain</label>
            <input
              type="text"
              placeholder="Enter your domain"
              ref={domainRef}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              placeholder="Enter your degree"
              ref={degreeRef}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              ref={ageRef}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">Number</label>
            <input
              type="text"
              placeholder="Enter your number"
              ref={numberRef}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Button Full Width */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContent;
