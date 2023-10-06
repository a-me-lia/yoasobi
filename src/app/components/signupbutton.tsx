"use client"
export default function SignUpButton(props:{text:string, func?:Function}){
    return(
        <div className="p-1 border-2 border-white">
         <button onClick={()=>{props.func}} className="hover:bg-transparent transition-all duration-200 px-6 pt-3 pb-2 md:text-[20px] text-[16px]  bg-white text-black font-semibold">{props.text}</button>
        </div>
    )
}