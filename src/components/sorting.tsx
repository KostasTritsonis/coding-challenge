import { setFilteredData } from "@/redux/slice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Sorting() {

  const data = useSelector((state:RootState) => state.data.data);
  const filteredData = useSelector((state:RootState) => state.data.data);
  const dispatch = useDispatch();
  
  const handleSorting = (value: string) => {
    if (value === "Name") {
      const sortedData = [...filteredData].sort((a, b) =>  (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
      dispatch(setFilteredData(sortedData));
    } else if (value === "Stars") {
      const sortedData = [...filteredData].sort((a, b) => b.stargazers_count - a.stargazers_count);
      dispatch(setFilteredData(sortedData));
    }
    else {
      dispatch(setFilteredData(data));
    }
  };

  return (
    <select className="bg-zinc-300 rounded-lg text-zinc-800 border border-zinc-600/50 p-2 m-2" onChange={(e) => handleSorting(e.target.value)}>
      <option value="">Sorting</option>
      <option value="Name">Name</option>
      <option value="Stars">Stars</option>
    </select>
  )
}
