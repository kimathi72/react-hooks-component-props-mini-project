import React from "react";

function Header ({name,image,about}){
    return (<>
    <h1>{name}</h1>
    <div style={{display:"flex",
     flexDirection: "row",
     justifyContent: "flex-start"
}} >
        <img style={{height:"50px",width:"50px"}} src={image} alt={name}/>
        <p >{about}</p>

    </div>
    
    </>)
}

export default Header;