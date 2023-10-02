let randomColor = function(){
    let r = Math.floor( 256 * Math.random() );
    let g = Math.floor( 256 * Math.random() );
    let b = Math.floor( 256 * Math.random() );
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

let drawRandomSquare = function(label=""){
    let div = document.createElement("div");
    div.style="padding:40px;text-align:center;margin:1px;width:22px;height:22px;display:inline-block;background-color:"+randomColor();
    div.textContent = label;
    document.querySelector('section').appendChild(div);
}

let writeInDocument = function(lambda){
    document.querySelector("section").innerHTML += "<strong>"+lambda+"</strong><br>";
}
