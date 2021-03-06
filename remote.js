window.onload=function(){
    
     // team score label
     let home_team_score=document.getElementById('home-team-score');
     let away_team_score=document.getElementById('away-team-score');
 
     // input field
     let home_team_goals=document.getElementById('home-team-goals');
     let away_team_goals=document.getElementById('away-team-goals');
 
     /** END VARIABLES */
 
     /**FUNCTIONS */
 
 // change home team result
 homeTeamScoring=()=>{
     home_team_goals.addEventListener('change', ()=>{
         home_team_score.innerHTML=`${home_team_goals.value}`;
     })
 }
 
 // change away team result
 awayTeamScoring=()=>{
     away_team_goals.addEventListener('change', ()=>{
         away_team_score.innerHTML=`${away_team_goals.value}`;
     })
 }
 
    // first half
   timer=()=>{
         let minutes=0;
         let seconds=0;
     
         let firstHalf = setInterval(() => {
             seconds++;
             if(seconds==60){
                 minutes=minutes+1;
                 seconds=0;
             }
 
             document.getElementById('timer').innerHTML=`${minutes}:${seconds}`;
             
             if(minutes==45){
             clearInterval(firstHalf);
             minutes=45;
             document.getElementById('timer').innerHTML="45:00";
             }
         
         }, 1000);
     
 
     this.document.getElementById('second-half').addEventListener('click',()=>{
         clearInterval(firstHalf);
     // second half
     let shminutes=45;
     let shseconds=0;
 
     let secondHalf = setInterval(() => {
         shseconds++;
         if(shseconds==60){
             shminutes=shminutes+1;
             shseconds=0;
         }
 
         document.getElementById('timer').innerHTML=`${shminutes}:${shseconds}`;
         
         if(shminutes==90){
           clearInterval(secondHalf);
           document.getElementById('timer').innerHTML="90:00";
         }
     
     }, 1000);
 
     })
 
   }
 
   // scoring system
 scoringSystem=()=>{
     homeTeamScoring();
     awayTeamScoring();
 }
 
 // calling functions
     scoringSystem();
     this.document.getElementById('start-game').addEventListener('click',()=>{
         timer();
     })
     /**END FUNCITONS */
    }