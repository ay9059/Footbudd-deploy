import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Centerbody.css'
import $ from "jquery"



class Centerbody extends Component{
   constructor(){ 
       super();
       this.para = React.createRef();
       this.val = "K cha";

   }


        abhi = () => {
            console.log(this.para);
            this.para.current.textContent=this.val}
 


            fet = () => {
                $.ajax({
                    headers: { 'X-Auth-Token': 'becea41ea11f4b8cb4c15de747cad4aa' },
                    url: 'http://api.football-data.org/v2/competitions/PL/matches/?matchday=23',
                    dataType: 'json',
                    type: 'GET',
                 

                  }).done(function(response) {
                    // do something with the response, e.g. isolate the id of a linked resource   
                    console.log(response);
                 
                    console.log(document.getElementById("Para").innerHTML=response.matches[0].homeTeam.name);
                  });
            }
  

render(){
 
    
    return(
        <div id="Centerbody">
        <p ref={this.para} id="Para">asdasdasd</p>
        <Button variant="secondary" id="get" onClick={this.fet}>Get</Button>
        </div>
    )
}

}

export default Centerbody;