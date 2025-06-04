import { createContext, useContext, useState } from "react";

export const authContext= createContext();
export default function Authprovider({children}){
const initialAuthUser=localStorage.getItem("user");
const [authUser , setAuthUser]=useState(initialAuthUser?JSON.parse(initialAuthUser):undefined);
return(
  <authContext.Provider value={[authUser , setAuthUser]} >
    {children}
  </authContext.Provider>
)

}
export const useAuth=()=>useContext(authContext)

