let randomColor = function(){
    let r = Math.floor( 256 * Math.random() );
    let g = Math.floor( 256 * Math.random() );
    let b = Math.floor( 256 * Math.random() );
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

let drawRandomSquareOfSize = function(size=10){
    let div = document.createElement("div");
    div.style="margin:1px;width:"+size+"px;height:"+size+"px;position:absolute;z-index:"+(500-size)+";background-color:"+randomColor();
   // div.textContent = label;
    document.querySelector('section').appendChild(div);
}

let getRandomSize = function(){ return Math.floor( 3 + 11*Math.random() ); }

let writeInDocument = function(lambda){
    document.querySelector("section").innerHTML += "<strong>"+lambda+"</strong><br>";
}
