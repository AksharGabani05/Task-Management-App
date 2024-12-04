import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { addTodo, updateSearchTodo } from "../Redux/Action/actions";
import { BsSearch } from "react-icons/bs";
import FilterButton from "../FilterButton";
import List from "./List";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Todo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");

  
  const initialTasks = [
    "Complete React project",
    "Write unit tests",
    "Attend team meeting",
    "Review code",
    "Push code to GitHub",
    "Refactor the login page",
    "Prepare documentation",
    "Fix bugs in the UI",
    "Update dependencies",
    "Design new feature UI"
  ];

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const saveTodo = () => {
    if (todoText.trim() !== "") {
      handleAddTodo(todoText.trim());
      setTodoText("");
      toast.success("Task Added Successfully!"); 
    }
  };

  const handleSearchTodo = (value) => {
    setSearchText(value);
    dispatch(updateSearchTodo(value));
  };

  
  useEffect(() => {
    initialTasks.forEach((task) => {
      handleAddTodo(task);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-black-200 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center text-blue-700 uppercase">
        Task Management
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="flex-grow p-2 border-b-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
          name="text"
          id="addTodo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-800 focus:outline-none"
          onClick={saveTodo}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <FilterButton />
        <div className="flex items-center justify-end mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            name="text"
            onChange={(e) => handleSearchTodo(e.target.value)}
            id="addTodo"
            className="flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4"
          />
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={saveTodo}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <List />

      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Todo;
