function convert() {
    let meter = document.getElementById("meter").value;
    let CM = meter * 100;
    let result=document.getElementById("result").innerHTML = meter + " mètre is " + CM + " CM";
    return result;
}
