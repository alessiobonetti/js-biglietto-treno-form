// buttons

var btnGenera = document.getElementById("btn_genera");
btnGenera.addEventListener("click",
 function() {
   var getName = document.getElementById("client_name").value;
   var getKm = document.getElementById("client_km").value;
   var getAge = document.getElementById("client_age").value;

   document.getElementById("ticket_calc").classList.remove("dsp_none");

 }
);

var btnGenera = document.getElementById("btn_annulla");
btnGenera.addEventListener("click",
 function() {
   

   document.getElementById("ticket_calc").classList.add("dsp_none");

 }
);
