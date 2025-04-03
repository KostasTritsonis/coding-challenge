'use client';
import Card from "@/components/card";
import Filtering from "@/components/filtering";
import Sorting from "@/components/sorting";
import { setData, setFilteredData, setLoading } from "@/redux/slice";
import { CircularProgress } from "@mui/material";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/lib/data";

export default function Home() {
  
  const loading = useSelector((state:RootState) => state.data.loading);
  const filteredData = useSelector((state:RootState) => state.data.filteredData);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const responseData = await fetchData();
      dispatch(setData(responseData));
      dispatch(setFilteredData(responseData));
      dispatch(setLoading(false));
    };
    getData();
  }, []);

  return (
    <main className="bg-zinc-300 flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-center text-zinc-800 p-10">Google's Github Repositories</h1>
      <div className="flex">
        <Filtering />
        <Sorting />
      </div>
      {loading && <CircularProgress className="flex justify-center items-center mt-40 bg-zinc-300" color="inherit" />}
      <ul className="flex flex-wrap justify-center gap-3 mt-4 w-[90%] mb-10">
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <Card key={data.id} name={data.name} stargazers_count={data.stargazers_count} description={data.description} html_url={data.html_url} />
          ))
        ) :<p className="text-zinc-800 text-center">No data found</p>}
      </ul>
    </main>
  );
}
