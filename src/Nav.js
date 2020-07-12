import React, { Component } from 'react'
import './Nav.css'
import { Button, Dropdown} from 'react-bootstrap';
import $ from "jquery"

class Nav extends Component{

    constructor(){
        super();
        //Refs created here
        this.para = React.createRef();
        this.league = React.createRef();
        this.day = React.createRef();
        this.year = React.createRef();
        this.table = React.createRef();

    }

      fetch = () => {
        $("#Para").empty();
        $("#Centerbody").empty();
        function loadImage(leag){
            console.log("ASDAADSDs")
            $(".badges").ready(function(){
            $("img").bind("error",function(){
             // Replacing image source
             
            $(this).attr("src","./"+leag+".png");
            });
           });
        }
        var loading = document.createElement("IMG");
        loading.src = "./giphy.gif";
        $("#Para").empty();
        $("#Para").append(loading);
        var match_league;
        var match_day;
        var match_year;

        //Get the league
        for ( let i = 0, len = 5; i < len; i++ ) {
            let opt = this.league.current.options[i];
           
            if ( opt.selected === true ) {
              
                match_league = this.league.current.options[i].innerHTML;
                console.log(match_league);
                if(match_league.localeCompare("Premier League")==0){
                    match_league = "PL";
                }else if(match_league.localeCompare("Bundesliga")==0){
                    match_league = "BL1";
                }else if(match_league.localeCompare("Serie A")==0){
                    match_league ="SA";
                }else if (match_league.localeCompare("La Liga")==0){
                    match_league="PD";
                }else{
                    match_league="FL1";

                }
                break;
            }
        }
        //Get the Day
        for ( let i = 0, len = 39; i < len; i++ ) {
            let opt = this.day.current.options[i];
            if ( opt.selected === true ) {
                match_day = this.day.current.options[i].value;
                break;
            }
        }

        //Get the year
        for ( let i = 0, len = 13; i < len; i++ ) {
            let opt = this.year.current.options[i];
            if ( opt.selected === true ) {
                //To get the numerical representatioin of the month
                match_year = this.year.current.options[i].value;
                break;
            }
        }

        $.ajax({
            headers: { 'X-Auth-Token': 'becea41ea11f4b8cb4c15de747cad4aa' },
            url: 'http://api.football-data.org/v2/competitions/'+match_league+'/matches/?season='
            +match_year+
            '&matchday='
            +match_day,
            dataType: 'json',
            type: 'GET',
          

          }).done(function(response) {
            // do something with the response, e.g. isolate the id of a linked resource   
            console.log(response);
            let h4 = document.createElement("H4");
            h4.innerHTML ="Fixtures for Matchday "+match_day;
            document.getElementById("Para").innerHTML="";

            $("#Para").append(h4);
         
            response.matches.forEach(element => {
       
                var di = document.createElement("div");

                //Get home team logo
                var im_home = new Image();
                im_home.src ="./"+element.homeTeam.name+".png";
                im_home.className = "badges";
                
               
               
                //Get away team logo
                var im_away = document.createElement("IMG");
                im_away.src = "./"+element.awayTeam.name+".png";
                im_away.className = "badges";
                let home_score = element.score.fullTime.homeTeam;
                let away_score = element.score.fullTime.awayTeam;
                console.log(element);
                if(home_score==null){
                    home_score = "TBD";
                    away_score = "TBD";
                }


              

                di.className = "score"
                di.innerHTML = im_home.outerHTML + element.homeTeam.name + '  <b>' 
                +home_score + '-' 
                + away_score
                + '</b>  '+ element.awayTeam.name + im_away.outerHTML;


               //Append the scoreline
               $("#Para").append(di);
               $("#Para").append("<br/>");
               loadImage(match_league);
               
            });
           
          });

          $.ajax({
            headers: { 'X-Auth-Token': 'becea41ea11f4b8cb4c15de747cad4aa' },
            url: 'http://api.football-data.org/v2/competitions/'+match_league+'/standings'
            ,
            dataType: 'json',
            type: 'GET',
          
          }).done(function(response) {

            
              console.log("match year is: "+match_year)
              var d = new Date();

              //Get the Current League
              if(match_year==d.getFullYear()-1){
                  //Main table div
                  let div = document.createElement("div");
                  div.className="table-like";
                  let score_div = document.createElement("DIV");
                  
                  let span = document.createElement("span");
                  let span1 = document.createElement("span");
                  let span_team = document.createElement("span");
                  let span2 = document.createElement("span");
                  let span3 = document.createElement("span");
                  let span4 = document.createElement("span");
                  let span5 = document.createElement("span");
                  let span6 = document.createElement("span");

             
                  span.innerHTML = "Pos";
                  span1.innerHTML = "";
                  span_team.innerHTML = "Team";
                  span2.innerHTML = "Points";
                  span3.innerHTML = "W";
                  span4.innerHTML = "D";
                  span5.innerHTML = "L";
                  span6.innerHTML = "GD";
                  score_div.append(span);
                  score_div.append(span1);
                  score_div.append(span_team);
                  score_div.append(span2);
                  score_div.append(span3);
                  score_div.append(span4);
                  score_div.append(span5);
                  score_div.append(span6);
         
                  div.append(score_div);
                  //$("#table").append(div);
                 
                 

                  let h4 = document.createElement("H4");
                  h4.innerHTML = "Current Season Table: ";
                  $("#Centerbody").append(h4);
                 response.standings[0].table.forEach(element =>{
                     console.log(element);
                    
                    let score_div = document.createElement("DIV");
                    let im = document.createElement("IMG");
                    let span0 = document.createElement("span");
                    let span = document.createElement("span");
                    let span1 = document.createElement("span");
                    let span2 = document.createElement("span");
                    let span3 = document.createElement("span");
                    let span4 = document.createElement("span");
                    let span5 = document.createElement("span");
                    let span6 = document.createElement("span");

                    
                    im.src=element.team.name+".png";
                    im.className="badges";


                    span0.innerHTML = element.position;
                    span.innerHTML = im.outerHTML;
                    span1.innerHTML = element.team.name;
                    span2.innerHTML = element.points;
                    span3.innerHTML = element.won;
                    span4.innerHTML = element.draw;
                    span5.innerHTML = element.lost;
                    span6.innerHTML = element.goalDifference;
               

                    score_div.append(span0);
                    score_div.append(span);
                    score_div.append(span1);
                    score_div.append(span2);
                    score_div.append(span3);
                    score_div.append(span4);
                    score_div.append(span5);
                    score_div.append(span6);

                    div.append(score_div);
                    $("#Centerbody").append(div);
                    loadImage(match_league);
                    
                 })

              }else{
                $("#Centerbody").text("Only available for current season");

              }
          })    

      }

    render(){
        return(
     
    //drop down menu
    <div id="Nav">
        

<div className="float-container">
<div className="float-child-select">
<div id="League">
        <h4>Select League: </h4>
       
        <select ref={this.league} className="selectpicker">
        <option value="0">Premier League</option>
         <option value="1">La Liga</option>
        <option value="2">Bundesliga</option>
        <option value="3">Serie A</option>
        <option value="4">Ligue 1</option>
        </select>
 </div>
        <br></br>
       
    
    <div id="date">
    <h4>Matchday</h4>
    <select name="Matchday" ref={this.day}>
        
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
     
        </select>
     
        <select name="Year" ref={this.year}>
        
        
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        </select>
     
        
        </div>
        <br/>

        <Button variant="primary" id="get" onClick={this.fetch} >Get</Button>

    </div>

    <div id="second">
        <div id="Centerbody">
        <p ref={this.table} id="table"></p>
        </div>
        <br/>
    </div>

    <div className="float-child">
      
        <div ref={this.para} id="Para"></div>

    </div>
    </div>
    </div>

        )}


}
export default Nav;