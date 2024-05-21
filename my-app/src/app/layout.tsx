import "./globals.css";
import Navbar from "./components/Navbar";
import React from "react";
import SpotlightPreview  from "./components/SpotlightPreview";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//    <html lang="en">
//     <head>heading</head>
//     <body>
//       <h1>children</h1>
//       {children}
//     </body>
//    </html>
//   );
// }





// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head> Heading </head>
//       <body>
//         <h1>Hello World</h1>
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
         <Navbar/>  
         <SpotlightPreview/>
         {children} 
        </div>
      </body>
    </html>
  );
}
