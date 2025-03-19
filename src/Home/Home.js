import React from "react";


function Home({data}) {
const {firstName, lastName} = data;
    return (
        <React.Fragment>
            
        <h2>{firstName} , {lastName}</h2>

        </React.Fragment>
    )


}

export default Home;