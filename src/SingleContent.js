import React from 'react';
// import {Component} from 'react';

const Single = (props)=>{
    return(
        <div>
            <h1 onClick={()=>{props.goDetail(props.id)}}>{props.platform}</h1>
            <p>{props.isi}</p>
        </div>
    )
}

export default Single
