import React, { ChangeEvent, SyntheticEvent } from "react";
import useDebounce from "../utils/useDebounce";

type SearchInputProps = {
  children?: any;
  onChange: (value?: string) => unknown | void;
};

function SearchInput({ onChange }: SearchInputProps) {
  const { setArgs } = useDebounce((...args: any) => {
    onChange(...args);
  }, 1000);
  const debouncedChange = (evt: any) => {
    setArgs([evt.target.value]);
  };
  return (
    <div className="relative">
      <div className="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
        <p>
          <svg
            className="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21
            21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </p>
      </div>
      <input
        id="input-search"
        data-testid="input-search"
        placeholder="Search Dogs "
        type="search"
        onChange={debouncedChange}
        className="block pt-2 pr-0 pb-2 pl-10 w-full py-2 rounded-lg sm:text-sm"
      />
    </div>
  );
}

export default SearchInput;
