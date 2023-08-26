var nofdrum = document.querySelectorAll(".drum").length;
for(var i = 0;i<nofdrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var dr = this.innerHTML;
        makesound(dr);
        butani(dr);
       
    });
    document.addEventListener('keypress',function(event){
        makesound(event.key);
        butani(event.key);
    });

    function makesound(key)
    {
        switch (key) {
            case 'w':
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case 'a':
                var bass = new Audio('sounds/kick-bass.mp3');
                bass.play();
                break;
            case 's':
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'd':
                var t1 = new Audio('sounds/tom-1.mp3');
                t1.play();
                break;
            case 'j':
                var t2 = new Audio('sounds/tom-2.mp3');
                t2.play();
                break;
            case 'k':
                var t3 = new Audio('sounds/tom-3.mp3');
                t3.play();
                break;
            case 'l':
                var t4 = new Audio('sounds/tom-4.mp3');
                t4.play();
                break;
            default:
                console.log();
                break;
        }
    }
    function butani(curentkey)
    {
        var activebutt = document.querySelector("."+curentkey);
        activebutt.classList.add("pressed");
        setTimeout(function()
        {
            activebutt.classList.remove("pressed");
        }, 100);

    }
}

