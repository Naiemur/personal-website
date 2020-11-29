var photos = ["images/1.png", "images/2.jpg", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png"];

var imgtag = document.querySelector("img");

var count = 0;

function next() {
   var count++;

    if(count>=photos.length){
        
        imgtag.src = photos[count];
    }else{
        imgtag.src =[count];
    }
    

}
function prev(){
    var count--;

    if(count>=photos.length){
        
        imgtag.src = photos[count];
    }else{
        imgtag.src =[count];
    }
}


