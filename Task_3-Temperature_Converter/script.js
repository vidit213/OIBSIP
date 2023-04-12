let m = document.getElementById("meter");
let k= document.getElementById("Km");

function meterTokm(){
    let output = ( parseFloat(m.value) * 1/1000);
    k.value = parseFloat(output.toFixed(4));
}

function kmTometer(){
    let output = ( parseFloat(k.value)*1000); // 1000 m --- 1km
    m.value = parseFloat( output.toFixed(4));
    console.log(output);
}