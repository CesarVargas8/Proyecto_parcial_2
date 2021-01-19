let request = new XMLHttpRequest();

request.open('get','http://api.weatherstack.com/current?access_key=d9c12e74fab1ef4e941eea285714d7ba&query=Colima');

request.onload=function(){
    let data= JSON.parse(this.response);
    console.log(data);
    document.getElementById("climaCiudad").innerHTML=data.location.name;
    document.getElementById("climaDatos").innerHTML=`<p>hora local:${data.location.localtime}
                                                     </p><p> ciudad:${data.location.country}
                                                     </p><p id='region' class='rojo'>
                                                     ${data.location.region}</p>`;
}


request.send();