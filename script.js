
var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF", "#02992a", "#8d70c4", "#c4a570", "#107194", "#fa0228", "#affa2d", "#00ffa2", "#979998"]; 
var i = 0; 

function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}