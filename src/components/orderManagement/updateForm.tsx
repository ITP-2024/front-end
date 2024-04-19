import React, { useState } from "react";

const UpdateForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [complainId, setComplainId] = useState("");
  const [error, setError] = useState("");

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleComplainIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComplainId(event.target.value);
    setError("");
  };

  const clearError = () => {
    setError("");
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!complainId.trim()) {
      setError("Complain ID cannot be empty");
      return;
    }

    const idExists = false;
    if (!idExists) {
      setError("Complain ID not found in the table");
      return;
    }

    if (selectedOption === "") {
      setError("Please choose a status");
      return;
    }

    console.log("Selected Option:", selectedOption);
    console.log("Complain ID:", complainId);

    setSelectedOption("");
    setComplainId("");
  };

  return (
    <div className="bg-fuchsia-800 hover:bg-fuchsia-800 text-black hover:text-white font-bold py-2 px-4 mt-[25px] mr-[20px] rounded">
      <button onClick={toggleForm}>Want to Update </button>
      {showForm && (
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          {error && (
            <div className="relative p-4 mb-4 text-sm font-medium text-red-800 rounded-lg bg-red-50 border border-red-300">
              <span
                className="absolute top-0 right-0 mr-2 mt-1 cursor-pointer"
                onClick={clearError}
              >
                &times;
              </span>
              {error}
            </div>
          )}
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Complain ID
            </label>
            <input
              type="text"
              id="small-input"
              value={complainId}
              onChange={handleComplainIdChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="options"
              className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <select
              id="options"
              value={selectedOption}
              onChange={handleSelectChange}
              className="block w-full p-4 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select Status</option>
              <option value="Processing">Processing</option>
              <option value="Done">Resolved</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Update
          </button>
          <button
            className="ml-2 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={closeForm}
          >
            Close Form
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateForm;
