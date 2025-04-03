import { setFilteredData } from "@/redux/slice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Filtering() {

  const dispatch = useDispatch();
  const data = useSelector((state:RootState) => state.data.data);
  const handleFilter = (value: string) => {
    const filteredData = data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    dispatch(setFilteredData(filteredData));
  };

  return (
    <input className="bg-zinc-300 rounded-lg border border-zinc-600/50 text-zinc-800 p-2 m-2" type="text" placeholder="Search" onChange={e => handleFilter(e.target.value)} />
  );
}
