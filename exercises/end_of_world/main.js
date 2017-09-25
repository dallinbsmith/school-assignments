var timeleft = 21;

var finalCountdown = setInterval(countdown, 1000);

function countdown(){
    timeleft = timeleft -1;
    if (timeleft < 10){
                    timeleft = "0" + timeleft;
                } 
    if (timeleft <= 0)
            {
            timeleft = "00";
                //whatever message about donald trump killing us all
                //play highway to hell
     clearInterval(finalCountdown);
  }
document.getElementById("clock").innerHTML = "00:00:" + timeleft;
}


function isTolerable(person){
        if (person === stupid){
            all.bs0
        }