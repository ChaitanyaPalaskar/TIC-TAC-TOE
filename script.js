var restart=document.querySelector('#btn');
var squares=document.querySelectorAll('td');
function clearBoard() {
    for (var i=0; i<squares.length; i++) {
        squares[i].textContent = '';
    }
}
restart.addEventListener('click',clearBoard);


function chnageMarkerX(){
    if(this.textContent===''){
        this.textContent ='X';
    }
    else if(this.textContent==='X'){
        this.textContent='O';
    }
    else{
        this.textContent='';
    }
}

for(var i=0;i<squares.length;i++){
            squares[i].addEventListener('click',chnageMarkerX)
}

const totalCountx = document.getElementById("xs");
var countx = 0;
totalCountx.innerHTML = countx;
const handleIncrementx = () => {
    countx++;
    totalCountx.innerHTML = countx;
};

const totalCounto = document.getElementById("os");
var counto = 0;
totalCounto.innerHTML = counto;
const handleIncremento = () => {
    counto++;
    totalCounto.innerHTML = counto;
};

const incrementCountx = document.getElementById("xi");
incrementCountx.addEventListener("click", handleIncrementx);
const incrementCounto = document.getElementById("oi");
incrementCounto.addEventListener("click", handleIncremento);