var arrayEstudents = []
function  submit(){
    var name = document.getElementById("name1").ariaValueMax;
    arrayEstudents.push(name);
    var tamanho = arrayEstudents.length;
    document.getElementById("displayName").innerHTML = arrayEstudents.toString();    
}
function sorting(){
    arrayEstudents.sort();
    var i = arrayEstudents.join("<br>");
    document.getElementById("sorted").innerHTML = i.toString();    
}
function show(){
    var i = arrayEstudents.join("<br>");
    document.getElementById("p1").innerHTML = i.toString();    
    document.getElementById("sortButton").style.display = "block";
}
 function surching(){
    var s = document.getElementById("s1").value ;
    var found = 0;
    var j ;
    for(j = 0;j < arrayEstudents.length;j++){
        if(s == arrayEstudents[j]){
            found = found+1;
        };
    };
    document.getElementById("p2").innerHTML = "nome encontrado " + found + "vezes";    
    
 };