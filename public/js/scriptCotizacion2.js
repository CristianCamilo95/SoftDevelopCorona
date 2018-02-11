//variables para el control de los capitulos de obra
var nmet = 0.0;
var preliminares = 0.00;
var demoliciones = 0.00;
var panetes = 0.00;
var enchape = 0.00;
var pintura = 0.00;
var aparatos = 0.00;
var aseo = 0.00;
var adicionales = 0.00;

/*
funcion para ingresar la informacion general de la Cotización
como son punto de venta, asesor, cliente, dias de obra, medidas del terreno.
Tambien se define parte de la informacion de los capitulos de obra como son
pinturas, aseo, adicionales, enchapes y por ultimo se define el valor total de
la cotizacion.
*/
$(function() {
$("#btnCalcularEn").button().on("click", function(event) {
  var cantidadpcen1 = parseFloat(document.getElementById('precen1').value);
  var prevuen1 = parseFloat(document.getElementById('prevuen1').value);
  document.getElementById('prevten1').value = cantidadpcen1 * prevuen1;
  var prevten = parseFloat(document.getElementById('prevten1').value);
  var divisor = parseFloat(document.getElementById('nMetros').value);
  document.getElementById('enchape').setAttribute("checked", "true");
  document.getElementById('prepfen1').value = parseFloat(prevten / divisor).toFixed(2);

  var cantidadpcen2 = parseFloat(document.getElementById('precen2').value);
  var prevuen2 = parseFloat(document.getElementById('prevuen2').value);
  document.getElementById('prevten2').value = cantidadpcen2 * prevuen2;
  var prevten2 = parseFloat(document.getElementById('prevten2').value);
  document.getElementById('prepfen2').value = parseFloat(prevten2 / divisor).toFixed(2);

  var cantidadpcen3 = parseFloat(document.getElementById('precen3').value);
  var prevuen3 = parseFloat(document.getElementById('prevuen3').value);
  document.getElementById('prevten3').value = cantidadpcen3 * prevuen3;
  var prevten3 = parseFloat(document.getElementById('prevten3').value);
  document.getElementById('prepfen3').value = parseFloat(prevten3 / divisor).toFixed(2);

  var cantidadpcen4 = parseFloat(document.getElementById('precen4').value);
  var prevuen4 = parseFloat(document.getElementById('prevuen4').value);
  document.getElementById('prevten4').value = cantidadpcen4 * prevuen4;
  var prevten4 = parseFloat(document.getElementById('prevten4').value);
  document.getElementById('prepfen4').value = parseFloat(prevten4 / divisor).toFixed(2);

  var cantidadpcen5 = parseFloat(document.getElementById('precen5').value);
  var prevuen5 = parseFloat(document.getElementById('prevuen5').value);
  document.getElementById('prevten5').value = cantidadpcen5 * prevuen5;
  var prevten5 = parseFloat(document.getElementById('prevten5').value);
  document.getElementById('prepfen5').value = parseFloat(prevten5 / divisor).toFixed(2);

  document.getElementById('valten').value = parseFloat(prevten + prevten2 + prevten3 + prevten4 + prevten5).toFixed(2);
  document.getElementById('precfmen').value = parseFloat((prevten + prevten2 + prevten3 + prevten4 + prevten5) / divisor).toFixed(2);
  document.getElementById('vuxmen').value = document.getElementById('precfmen').value;
  document.getElementById('vten').value = document.getElementById('precfmen').value * divisor;
  enchape = document.getElementById('precfmen').value * divisor;
})

$("#btnCalcularPin").button().on("click", function(event) {
  var cantidadpcpin1 = parseFloat(document.getElementById('precpin1').value);
  var prevupin1 = parseFloat(document.getElementById('prevupin1').value);
  document.getElementById('prevtpin1').value = cantidadpcpin1 * prevupin1;
  var prevtpin = parseFloat(document.getElementById('prevtpin1').value);
  var divisor = parseFloat(document.getElementById('nMetros').value);
  document.getElementById('pintura').setAttribute("checked", "true");
  document.getElementById('prepfpin1').value = parseFloat(prevtpin / divisor).toFixed(2);
  document.getElementById('valtpin').value = parseFloat(prevtpin).toFixed(2);
  document.getElementById('precfmpin').value = parseFloat((prevtpin) / divisor).toFixed(2);
  document.getElementById('vuxmpin').value = document.getElementById('precfmpin').value;
  document.getElementById('vtpin').value = document.getElementById('precfmpin').value * divisor;
  pintura =  document.getElementById('precfmpin').value * divisor;
})

$("#btnCalcularIn").button().on("click", function(event) {
  var cantidadpcin1 = parseFloat(document.getElementById('precin1').value);
  var prevuin1 = parseFloat(document.getElementById('prevuin1').value);
  document.getElementById('prevtin1').value = cantidadpcin1 * prevuin1;
  var prevtin = parseFloat(document.getElementById('prevtin1').value);
  var divisor = parseFloat(document.getElementById('nMetros').value);
  document.getElementById('aparatos').setAttribute("checked", "true");
  document.getElementById('prepfin1').value = parseFloat(prevtin / divisor).toFixed(2);

  var cantidadpcin2 = parseFloat(document.getElementById('precin2').value);
  var prevuin2 = parseFloat(document.getElementById('prevuin2').value);
  document.getElementById('prevtin2').value = cantidadpcin2 * prevuin2;
  var prevtin2 = parseFloat(document.getElementById('prevtin2').value);
  document.getElementById('prepfin2').value = parseFloat(prevtin2 / divisor).toFixed(2);

  var cantidadpcin3 = parseFloat(document.getElementById('precin3').value);
  var prevuin3 = parseFloat(document.getElementById('prevuin3').value);
  document.getElementById('prevtin3').value = cantidadpcin3 * prevuin3;
  var prevtin3 = parseFloat(document.getElementById('prevtin3').value);
  document.getElementById('prepfin3').value = parseFloat(prevtin3 / divisor).toFixed(2);

  var cantidadpcin4 = parseFloat(document.getElementById('precin4').value);
  var prevuin4 = parseFloat(document.getElementById('prevuin4').value);
  document.getElementById('prevtin4').value = cantidadpcin4 * prevuin4;
  var prevtin4 = parseFloat(document.getElementById('prevtin4').value);
  document.getElementById('prepfin4').value = parseFloat(prevtin4 / divisor).toFixed(2);

  var cantidadpcin5 = parseFloat(document.getElementById('precin5').value);
  var prevuin5 = parseFloat(document.getElementById('prevuin5').value);
  document.getElementById('prevtin5').value = cantidadpcin5 * prevuin5;
  var prevtin5 = parseFloat(document.getElementById('prevtin5').value);
  document.getElementById('prepfin5').value = parseFloat(prevtin5 / divisor).toFixed(2);

  var cantidadpcin6 = parseFloat(document.getElementById('precin6').value);
  var prevuin6 = parseFloat(document.getElementById('prevuin6').value);
  document.getElementById('prevtin6').value = cantidadpcin6 * prevuin6;
  var prevtin6 = parseFloat(document.getElementById('prevtin6').value);
  document.getElementById('prepfin6').value = parseFloat(prevtin6 / divisor).toFixed(2);

  var cantidadpcin7 = parseFloat(document.getElementById('precin7').value);
  var prevuin7 = parseFloat(document.getElementById('prevuin7').value);
  document.getElementById('prevtin7').value = cantidadpcin7 * prevuin7;
  var prevtin7 = parseFloat(document.getElementById('prevtin7').value);
  document.getElementById('prepfin7').value = parseFloat(prevtin7 / divisor).toFixed(2);

  var cantidadpcin8 = parseFloat(document.getElementById('precin8').value);
  var prevuin8 = parseFloat(document.getElementById('prevuin8').value);
  document.getElementById('prevtin8').value = cantidadpcin8 * prevuin8;
  var prevtin8 = parseFloat(document.getElementById('prevtin8').value);
  document.getElementById('prepfin8').value = parseFloat(prevtin8 / divisor).toFixed(2);

  var cantidadpcin9 = parseFloat(document.getElementById('precin9').value);
  var prevuin9 = parseFloat(document.getElementById('prevuin9').value);
  document.getElementById('prevtin9').value = cantidadpcin9 * prevuin9;
  var prevtin9 = parseFloat(document.getElementById('prevtin9').value);
  document.getElementById('prepfin9').value = parseFloat(prevtin9 / divisor).toFixed(2);

  var cantidadpcin10 = parseFloat(document.getElementById('precin10').value);
  var prevuin10 = parseFloat(document.getElementById('prevuin10').value);
  document.getElementById('prevtin10').value = cantidadpcin10 * prevuin10;
  var prevtin10 = parseFloat(document.getElementById('prevtin10').value);
  document.getElementById('prepfin10').value = parseFloat(prevtin10 / divisor).toFixed(2);
  document.getElementById('valtin').value = parseFloat(prevtin + prevtin2 + prevtin3 + prevtin4 + prevtin5 + prevtin6 + prevtin7 + prevtin8 + prevtin9 + prevtin10).toFixed(2);
  document.getElementById('precfmin').value = parseFloat((prevtin + prevtin2 + prevtin3 + prevtin4 + prevtin5 + prevtin6 + prevtin7 + prevtin8 + prevtin9 + prevtin10) / divisor).toFixed(2);
  document.getElementById('vuxmapar').value = document.getElementById('precfmin').value;
  document.getElementById('vtapar').value = document.getElementById('precfmin').value * divisor;
  aparatos = document.getElementById('precfmin').value * divisor;
})

$("#btnCalcularAseo").button().on("click", function(event) {
  var cantidadpcpa1 = parseFloat(document.getElementById('precpa1').value);
  var prevupa1 = parseFloat(document.getElementById('prevupa1').value);
  document.getElementById('prevtpa1').value = cantidadpcpa1 * prevupa1;
  var prevtpa = parseFloat(document.getElementById('prevtpa1').value);
  var divisor = parseFloat(document.getElementById('nMetros').value);
  document.getElementById('aseo').setAttribute("checked", "true");
  document.getElementById('prepfpa1').value = parseFloat(prevtpa / divisor).toFixed(2);
  document.getElementById('valtpa').value = parseFloat(prevtpa).toFixed(2);
  document.getElementById('precfmpa').value = parseFloat((prevtpa) / divisor).toFixed(2);
  document.getElementById('vuxma').value = document.getElementById('precfmpa').value;
  document.getElementById('vtpa').value = document.getElementById('precfmpa').value * divisor;
  aseo = document.getElementById('precfmpa').value * divisor;
})

$("#btnCalcularAd").button().on("click", function(event) {
  var cantidadpcpad1 = parseFloat(document.getElementById('precpad1').value);
  var prevupad1 = parseFloat(document.getElementById('prevupad1').value);
  document.getElementById('prevtpad1').value = cantidadpcpad1 * prevupad1;
  var prevtpad = parseFloat(document.getElementById('prevtpad1').value);
  var divisor = parseFloat(document.getElementById('nMetros').value);
  document.getElementById('prepfpad1').value = parseFloat(prevtpad / divisor).toFixed(2);
  document.getElementById('valtpad').value = parseFloat(prevtpad).toFixed(2);
  document.getElementById('precfmpad').value = parseFloat((prevtpad) / divisor).toFixed(2);
  adicionales = document.getElementById('precfmpad').value * divisor;
  document.getElementById('adic').value = adicionales.toFixed(2);
})
});
