import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted } from "./Redux/Action/actions";

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodo(filter));
  };

  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg">
      {/* Dropdown for filter */}
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="ALL">All Tasks</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      {/* Mark All Completed Button */}
      <button
        onClick={() => dispatch(markAllCompleted())}
        className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
