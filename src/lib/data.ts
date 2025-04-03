import { DataProps } from "./type";

export async function fetchData(): Promise<DataProps[]> {
  try{
    const response = await fetch('https://api.github.com/users/google/repos?per_page=100');
    return await response.json() as DataProps[];
  } catch (error) {
    console.log(error);
    return [] as DataProps[];
  }
};


export const lorem50 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet dignissim accumsan. Aliquam fermentum justo nec mi consequat, non varius purus semper. Donec ornare leo sed rutrum lacinia. Fusce porta velit vitae auctor placerat. Morbi imperdiet sodales massa, at mollis mi mattis ac. Maecenas ut felis non enim aliquet porttitor at ut risus. In hac habitasse platea dictumst. Phasellus a facilisis diam, eget aliquet lorem. Donec facilisis sem scelerisque aliquet mattis. Integer sagittis eu ex cursus auctor. Donec fringilla vehicula felis, eu consequat nibh. Mauris luctus rutrum turpis sit amet facilisis. Ut volutpat sodales nunc, ac ullamcorper elit euismod vitae. Phasellus dapibus mollis arcu.Mauris imperdiet leo lorem, a porttitor enim euismod eu. Morbi ipsum quam, lacinia et orci at, porttitor placerat est. Nunc pellentesque ligula in nibh interdum, eget molestie ex interdum. Sed feugiat pretium consequat. Aenean rutrum, leo ac feugiat consequat, nulla nisi rutrum sapien, quis cursus velit enim vitae arcu. Suspendisse vitae hendrerit ligula, quis consequat sem. Etiam turpis quam, vulputate non tempor vel, scelerisque id nulla. Morbi eget leo ac elit fringilla vestibulum. Etiam sapien sapien, pharetra vel sollicitudin quis, finibus aliquam felis. Morbi egestas felis ac leo accumsan ullamcorper. Maecenas odio velit, condimentum quis accumsan non, cursus nec augue."