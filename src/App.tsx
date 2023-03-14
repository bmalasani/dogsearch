/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Card from "./components/Card";
import DogRow, { Dog } from "./components/DogRow";
import SearchInput from "./components/SearchInput";
import useFetch from "./utils/useFetch";

function App() {
  const [searchVal, setSearchVal] = useState<string | undefined>("");
  const baseUrl = "https://api.thedogapi.com/v1/";

  const url = `${baseUrl}${
    searchVal
      ? "breeds/search?q=" + encodeURIComponent(searchVal)
      : "breeds?limit=10&page=0"
  }`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "api-key",
    "ive_awOnBnfFStOLf45P8ZUyLFXMpCb2NBFhUEOzi42UYAkf0l6SovFBSTN66WbtVhGf"
  );

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const { loading, data, error } = useFetch<Dog[]>(url, requestOptions);
  const handleSearchChange = (value?: string) => {
    console.log(value);
    setSearchVal(value);
  };
  return (
    <div className="font-sans bg-orange-100 text-gray-700">
      <div className="container mx-auto p-4 flex">
        <div className="max-w-3xl w-full flex flex-col justify-center mx-auto">
          <h1 className="text-4xl mb-10 text-center w-full font-thin">
            Dog Search
          </h1>
          <div className="lg:px-20 sm:px-2">
            <SearchInput onChange={handleSearchChange} />
          </div>
          {loading ? (
            <Card>
              <div role="status" className="w-full animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </Card>
          ) : data && data.length ? (
            data.map((dog: Dog) => (
              <DogRow {...dog} key={dog.reference_image_id} />
            ))
          ) : (
            <Card>No Records found with "{searchVal}"</Card>
          )}
          {error && <Card>An error occurred. {error.message}</Card>}
        </div>
      </div>
    </div>
  );
}

export default App;
