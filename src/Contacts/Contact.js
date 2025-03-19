import { useEffect, useState } from "react";


 const Contacts = () => {
    const [data, setData] = useState("");




    const getUsers = async (url) => {
        const myural = await fetch(url) ;
        const res = await myural.json();
const neel = res.map((eachName) => {
    const {name, userName} = eachName
    return setData(name);
}) 

    }




    useEffect(()=> {
getUsers("https://jsonplaceholder.typicode.com/users")
    },[])




    return (
        <div>
<h1>{data}</h1>
        </div>
    )
}
 

export default Contacts;