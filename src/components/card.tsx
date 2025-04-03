import { lorem50 } from '@/lib/data';
import { DataProps } from '@/lib/type';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';

export default function Card(props: DataProps) {

  const randomNumber = Math.floor(Math.random() * 1000);
  const text = lorem50.substring(randomNumber, randomNumber + 50); 
  
  return (
    <li className="relative flex flex-col justify-evenly w-48 h-52 overflow-y-auto text-center bg-zinc-800 rounded-lg shadow-md p-2  break-words  hover:scale-105  duration-300 ease-in-out transition ">
      <p className='text-md font-bold text-zinc-50 mr-1'>{props.name}</p>
      {props.stargazers_count > 1000 && <StarsIcon className='ml-2 text-blue-500 absolute top-0.5 right-0.5'/>}
      <p className='font-normal gap-1'><StarIcon className='text-amber-400 mb-1 mr-1'/>{props.stargazers_count}</p>
      <p className='text-[12px] text-zinc-200'>{props.description ? props.description : text}</p>
      <a className='text-blue-500' href={props.html_url} target="_blank"><LaunchIcon /></a>
    </li>
  )
}
