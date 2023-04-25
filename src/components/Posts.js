import React from "react";

function Posts ({id,title,date="December 11, 2020",preview,minutes}){
    const icons = function () {
        let icon = "☕️";
        if(minutes > 5){
            let count;
            for (count=0; count<=Math.floor(minutes/5); count++){
                icon = icon + "☕️"
             } 
        }else{
            icon = icon; 
    }
    return icon;
    }();
    
   return (
    <article key={id}>
    <h1 style={{color:"cyan"}}>{title}</h1>
    <small>{date}-{icons}-{minutes} min read</small>
    <p>{preview}</p>
    </article>
   ) 
}
export default Posts