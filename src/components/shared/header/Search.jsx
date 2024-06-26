import { debounce } from "../../../utils/Debounce";
import { useDispatch } from "react-redux";
import { addFilteringPath } from "../../../Redux/Features/Products/productSlice";

export default function Search() {
    const dispatch = useDispatch();

    const handleInput = (event) => {
        debouncing(event.target.value)
    }
    const handleSearch = (inputText) => {
        dispatch(addFilteringPath(`keyword=${inputText}`));
    }

    const debouncing = debounce(handleSearch, 500);

    return (
        <div className="w-[70%] lg:w-1/3 mx-auto">
            <div className="relative">
                <input type="search" id="search-dropdown" className="block p-2 md:p-4 w-full z-20 text-sm bg-gray-50 rounded-lg border-gray-50 border  focus:ring-blue-500 focus:border-blue-500 dark:bg-white  dark:border-gray-200 dark:placeholder-[#090909cd] dark:text-black dark:focus:border-blue-500" placeholder="Search products..." required onChange={(event) => handleInput(event)} />

                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSearch}>
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>

    )
}
