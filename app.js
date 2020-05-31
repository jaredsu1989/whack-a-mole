document.addEventListener('DOMContentLoaded', function() {
    let time = Number(document.getElementById('time').textContent);
    let score = Number(document.getElementById('score').textContent);
    let square = document.querySelectorAll('.square');
    let moleGridId = [1,2,3,4,5,6,7,8,9];
    let button = document.getElementById('restart');
    let moleSound = document.getElementById('moleSound');
    let emptyHit = document.getElementById('emptyHit');

    button.onclick = a;

    function a() {
        let timer = setInterval(countDown, 1000);
        let moleMovement = setInterval(movingMole, 525);

        //set start-game condition
        score = 0;
        document.getElementById('score').innerText = score;

        //movingMole
        function movingMole() {
            moleGridId.sort((a, b) => 0.5 - Math.random());
            square.forEach((ele, index) => {
                ele.setAttribute('squareId', moleGridId[index]);
                if (ele.getAttribute('squareId') == 5) {
                    ele.classList.add('mole');
                    ele.onclick = scoreChange
                } else {
                    ele.classList.remove('mole');
                    noChange(ele);
                    ele.onclick = emptyHit.play();
                    
                }

            });
        }    
    
        //score change function
        function scoreChange() {
            score+=1;
            document.getElementById('score').innerText = score;
            moleSound.play();    
        }
        
        function noChange(ele) {
            ele.onclick = "";
            score+=0;
            document.getElementById('score').innerText = score;

        }
    
        //coundown function
        function countDown() {
            if (time == 0) {
                time = 60;
                //score = 0;
                document.getElementById('score').innerText = score;
                document.getElementById('time').innerText = time;    
                clearInterval(timer);
                clearInterval(moleMovement);
                square.forEach((ele, index) => {
                    ele.classList.remove('mole');
                    ele.onclick = "";
                });
                button.disabled = false;

            } else {
                button.disabled = true;
                time-=1;
                document.getElementById('time').innerText = time;        
            }
        }
    }
});