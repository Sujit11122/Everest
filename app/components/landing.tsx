import Image from "next/image";
import background from '../assests/logo.gif'
export default function landing(){
    return(
        <div>
          <Image src ={background} alt="background image" width={1000} height={1000} objectFit="cover"/>
        </div>
    )
}