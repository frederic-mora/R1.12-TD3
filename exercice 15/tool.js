
let renderOneCat = function(obj){
    let html = document.querySelector('template').innerHTML;
    html = html.replace("{{url}}", obj.picture);
    html = html.replaceAll("{{catname}}", obj.name);
    document.querySelector("section").innerHTML+= html;
}