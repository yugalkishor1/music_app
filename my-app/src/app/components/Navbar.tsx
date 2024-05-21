"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";


export default function ({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="home"/> 
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}






















// "use client"

// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "../utils/cn";
// import Link from "next/link";

// export default function ({className} : {className?: string}) {
//   const [active,setActive] = useState<null | string> (null);
//     return (
   
//       <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//         <Menu setActive={setActive}>
//           <MenuItem setActive={setActive} active={active} item="home">
//             <HoveredLink href={"/"}>home</HoveredLink>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="about">
//             <HoveredLink href={"/about"}>about</HoveredLink><br/>
//             <HoveredLink href={"/us"}>us</HoveredLink><br/>
//             <HoveredLink href={"/us"}>us</HoveredLink><br/>
//             <HoveredLink href={"/us"}>us</HoveredLink>
//           </MenuItem>
//           <MenuItem setActive={setActive} active={active} item="contact">
//             <HoveredLink href={"/contact"}>contact</HoveredLink><br/>
//             <HoveredLink href={"/me"}>me</HoveredLink><br/>
//             <HoveredLink href={"/me"}>me</HoveredLink><br/>
//             <HoveredLink href={"/me"}>me</HoveredLink>
//           </MenuItem>
//         </Menu>
//       </div>
//     )
// }




/**
 * 
 * 
 * 
 * 
 * 
 
 * 
 * 
 * 
 * 1. what is compliation and devlopment time explain with exmaple scenerios . are they same explain with exmaple scenerios 
 * 2.let variableName: string;
After declaring the variable, you can assign a value of the specified type to it:
typescriptCopy codevariableName = "This is a string value";
If you try to assign a value of a different type, TypeScript will throw an error during compilation. do it this in one line 







Easy Example: Declaring Variables
When declaring a variable in TypeScript, you first think about the type of data it will hold. After the variable name, you add a colon : followed by the data type.
For example, if you want to declare a variable to store a string value, you would write:
typescriptCopy codelet variableName: string;
After declaring the variable, you can assign a value of the specified type to it:
typescriptCopy codevariableName = "This is a string value";
If you try to assign a value of a different type, TypeScript will throw an error during compilation. i love this explantion now give me for regular function, function expression and arrow function 






now give me for objects , and step by step guide in begginer friendly way 
now give me for arrays , and step by step guide in begginer friendly way 



















explain typescripsts type system 







interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}
const person: Person = {
  name: "Alice",
  age: 25,
  isStudent: true
}; 
explain these in more easy and step by step way like you previsouly explain like first think about the data type of variable and then add a colon follwed by the data type now i want you to explain same for this 
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}
const person: Person = {
  name: "Alice",
  age: 25,
  isStudent: true
}; 
in begginer friendly way 











so is it necessary to use Interface before working with object , can i directly write object just like i write typescript for other datatypes like number or string? explain with exmaple scerios 




ok so when i write a function in typescript so after the paramter name i have to add colon and give the datatype and after the paranthers  i have to add colon and the datatype and this datatype will be the resturn datatype am i right? ok now see how i explain it i want you to explain me like that like in easy way like a tutor who is teach each step ok now give me 3 differnet exmpale easy medium and super hard and now explain me 




how to write typescript in object ok give me 3 example scenerio easy medium and super hard ok , and do not just give me the code ok , i want you to guide me as begiiner and step by step guide how to think the approcha should be while writing typescript 





how to write typescript in araay ok give me 3 example scenerio easy medium and super hard ok , and do not just give me the code ok , i want you to guide me as begiiner and step by step guide how to think the approcha should be while writing typescript 

















  1.TypeScript provides interfaces, which act as blueprints for object shapes, helping you ensure consistency and catch errors. what do you mean by this line explain with exmple scenerios , what interfaces you are talking about .
  2.what is even interface mean ? is it a keyword or class or what it is explain with exmpale scenerios 











  give me exmaple scenerios where you are passing object paramter to the function and do not just give me the code , i want you to explain me step by step guide with the mindest and approhc how to actually think 

  give me exmaple scenerios where you are passing object paramter to the regular function and do not just give me the code , i want you to explain me step by step guide with the mindest and approhc how to actually think 

  give me exmaple scenerios where you are passing object paramter to the function expression and do not just give me the code , i want you to explain me step by step guide with the mindest and approhc how to actually think 

  give me exmaple scenerios where you are passing object paramter to the arrow function and do not just give me the code , i want you to explain me step by step guide with the mindest and approhc how to actually think 














  i asked you for mindset and apprcoch and you gave me that "Think about data types: Before writing any code, think about the data types you'll be working with and how they might interact with each other. This will help you plan your type definitions and catch potential type-related issues early on." , by  mindset and approch i do not want generic advice from you i want you give me guide in each step and each segment or each word like you can say when you want to write typescript you have to add colon after the variable and then give datatype like that ok , i want this 





















  explain typescript features like interfaces, classes, generics, and utility types, with example scenerios and go deep dive into it and in deatiled explaination with exmaple scenerios 







email?: string; // Optional property explain how this optional property works with exmaple scnerio ,and how to think when i have to give optional property 











































import React from "react"

Interface Mycomponentprops :{
  text:string | number | boolean,
  onClick?:()=> void 
}

function Mycomponent:React.FC<Mycomponentprops> (props) {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}












 */