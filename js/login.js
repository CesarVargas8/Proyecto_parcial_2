var bd = JSON.parse(localStorage.getItem("bd"));
if (!bd ||bd==undefined){
    bd = 
    {
        login:{
            is:false,
            type:"cliente",
            userindex:null
        },
        usuarios:[
            {
                nombre: "propietarionombre",
                telefono: "propietario",
                clave: "123tamarindo",
                tipo :"propietario",
            },
            {
                nombre: "prueba",
                telefono: "3121231234",
                clave: "hola123",
                tipo :"cliente",
            }   
        ]
    }
}
localStorage["bd"] = JSON.stringify(bd);

document.getElementById("btnsubmit").addEventListener("click",function(e){
    e.preventDefault();
    var telef=document.getElementById("txtusuario").value;
    var clav=document.getElementById("txtpassword").value;
    bd = JSON.parse(localStorage.getItem("bd"));
    for(var i in bd.usuarios)
        if(telef == bd.usuarios[i].telefono)
            if(clav == bd.usuarios[i].clave)
            {
                bd.login.is = true;
                localStorage["bd"] = JSON.stringify(bd);
                bd.login.userindex = i;
                bd.login.type=bd.usuarios[i].tipo;
                if(bd.login.type == "propietario")
                    location.replace("vistaprincipal.html");
            }
    localStorage["bd"] = JSON.stringify(bd);
    if(bd.login.is == false)
        alert("Usuario y/o clave invalida, revise sus datos.");
    
});
