import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {useState} from 'react';
import $ from "jquery";



    

    
function Drop(){
    
   
    const [value,setValue]=useState('');


    const handleSelect=(e)=>{
     console.log(e);
     setValue(e)
     $("#dropdown-menu-align-right").text(e);
    
     console.log(value);
     
   }


    

    return(   
    
        
        <DropdownButton
    alignRight
    title="Select League"
    id="dropdown-menu-align-right"
    onSelect={handleSelect}
    
   
  
      >
            <Dropdown.Item eventKey="PL">Premier League</Dropdown.Item>
            <Dropdown.Item eventKey="PD">La Liga</Dropdown.Item>
            <Dropdown.Item eventKey="BL1">Bundesliga</Dropdown.Item>
            <Dropdown.Item eventKey="SA">Serie A</Dropdown.Item>

    </DropdownButton>
)


}

export default Drop;

