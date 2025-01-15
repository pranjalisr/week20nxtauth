// authentcation
"use client"  // for onClick
import axios from "axios";

export default function() {
    return <div>
        Sign in page <br/>
        <input></input>
       <input></input>
       <button onClick={async () => {
         const res = await axios.post("https://localhost:3000/api/signin", {
            username:"abc",
            password: "asdasd"
         })

         localStorage.setItem("token", res.data.token);
        
       }}>Sign in</button>


    </div>
}