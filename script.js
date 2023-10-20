let display=document.getElementById("display");
        function interface(){
            document.getElementById("interface").style.display="flex";
        }
        function main(){
            document.getElementById("interface").style.display="none";
        }
        let sec=0;
        let interval=null;
        function timer(){
            sec++;
            let hrs=Math.floor(sec/3600);
            let mins=Math.floor((sec-(hrs * 3600))/60);
            let secs=sec%60;
            if(secs<10) secs=`0${secs}`;
            if(mins<10) mins=`0${mins}`;
            if(hrs<10) hrs=`0${hrs}`;
            display.innerHTML=`${hrs}:${mins}:${secs}`;
        }
        
        function start(){
            if(interval){
                return
            }
            interval=setInterval(timer,1000);
        }
        function stop(){
            clearInterval(interval);
            interval=null;
        }
        function reset(){
            stop();
            display.innerHTML=`00:00:00`;
            sec=0;
        }