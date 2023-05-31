import { Block } from "../components/Container/Hourly/Block/Block.module";
import { lost_data } from "../data";


export const getData = ()=>{
    const data = lost_data.сurrent.hourly
    const keys = Object.keys(data)
    return keys.map((key)=>{
        return(<Block info={data[key]} ></Block>)
    })

    
}