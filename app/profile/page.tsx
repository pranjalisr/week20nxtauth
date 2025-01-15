// SSR
//nxt auth supports providers

import axios from "axios"
import { useEffect, useState } from "react"


export default async function Profile() {
    // const [profilePicture, setProfilePicture] = useState("");


    // useEffect(() => { 
        const res = await axios.get("http://localhost:3000/api/profile", {
            headers: {
                authorization: localStorage.getItem("token")

            }
        })
        /* .then(res => {
            setProfilePicture(res.data.avatarUrl)

        })
    }, [])
*/

const profilePicture = res.data.avatarUrl;


    return <div>
     {profilePicture}

    </div>

}