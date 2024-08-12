import React, { useEffect, useState, useCallback } from "react";
import DataTable from "react-data-table-component";

function Admin() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Column definition for DataTable
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => `₹${row.price}`,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <img src={row.image} alt={row.title} className="h-auto w-[50px]" />
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          onClick={() => handleDelete(row.id)}
          className="text-gray-700 border-2 border-blue-400 rounded-full text-[12px] p-1 hover:bg-red-300 hover:text-white transition-all duration-300 ease-in px-3"
          aria-label={`Delete ${row.title}`}
        >
          Delete
        </button>
      ),
    },
  ];

  // Fetch data function
  const getData = useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setAllData(result);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, []);

  // Manage delete button
  const handleDelete = useCallback((id) => {
    // Implement delete functionality, e.g., making an API call
    console.log(`Delete item with id: ${id}`);
    // After deletion, you may want to update the state to remove the item from the list
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="outline w-[1120px] rounded-md mb-10 mx-auto p-6 mt-9">
      <h1 className="text-4xl text-center mb-5 underline mt-3">
        All Product Details
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <DataTable
          data={allData}
          columns={columns}
          pagination
          // Additional DataTable props like pagination, search, etc., can be added here
        />
      )}
    </div>
  );
}

export default Admin
