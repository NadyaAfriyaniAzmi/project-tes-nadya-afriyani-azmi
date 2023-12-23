import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Card from "../component/Card";

const LandingPage = () => {
  const [ideasData, setIdeasData] = useState([]);
  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortby") || "-created_at"
  );
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas",
          {
            params: {
              "page[number]": currentPage,
              "page[size]": pageSize,
              append: ["small_image", "medium_image"],
              sort: sortBy,
            },
          }
        );
        setIdeasData(response.data.data);
        setTotalItems(response.data.meta.total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, pageSize, sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalItems / pageSize);
  const maxVisiblePages = 5;

  const startPage = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(maxVisiblePages / 2),
      totalPages - maxVisiblePages + 1
    )
  );
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  return (
    <div>
      <Header />
      <Banner />
      <div className="flex justify-between mt-8 px-20">
        <div className="flex justify-center mt-8">
          <p className="mr-2">{`Showing ${
            (currentPage - 1) * pageSize + 1
          }-${Math.min(
            currentPage * pageSize,
            totalItems
          )} of ${totalItems} items`}</p>
        </div>
        <div className="flex  my-4">
          <label className="mr-2 py-2">Sort By:</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="mr-4 border py-2 px-5 rounded-full"
          >
            <option value="-created_at">Newest</option>
            <option value="created_at">Oldest</option>
          </select>

          <label className="mr-2 py-2">Show Per Page:</label>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className="border py-2 px-5 rounded-full"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
      <div className="grid px-20 my-16 w-full gap-6 md:grid-cols-4">
        {ideasData.map((item) => (
          <Card
            key={item.id}
            createdAt={item.created_at}
            title={item.title}
            smallImage={
              item.small_image && item.small_image.length > 0
                ? item.small_image[0].url
                : null
            }
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="mx-2 p-2 border"
        >
          Previous
        </button>

        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <button
            key={startPage + index}
            onClick={() => handlePageChange(startPage + index)}
            className={`mx-2 p-2 border ${
              currentPage === startPage + index ? "bg-[#ff7300] text-white" : ""
            }`}
          >
            {startPage + index}
          </button>
        ))}

        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
          className="mx-2 p-2 border"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
