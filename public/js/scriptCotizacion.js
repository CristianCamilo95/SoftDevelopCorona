var nmet = 0.0;
var preliminares = 0.00;
var demoliciones = 0.00;
var panetes = 0.00;
var enchape = 0.00;
var pintura = 0.00;
var aparatos = 0.00;
var aseo = 0.00;
var adicionales = 0.00;

$(function() {
  $("#btnCotizacion").button().on("click", function(event) {
    var fecha = new Date(document.getElementById("fecha").value);
    var f = (fecha.getMonth() + 1) + "/" + fecha.getDate() + "/" + fecha.getFullYear();
    document.getElementById('form1').submit();
  })

  $("#btnMedidas").button().on("click", function(event) {
    var ancho = parseFloat(document.getElementById('ancho').value);
    var largo = parseFloat(document.getElementById('largo').value);
    document.getElementById('nMetros').value = ancho * largo;
    nmet = document.getElementById('nMetros').value;
    alert("Medidas Ingresadas. Prosiga a definir los detalles del capitulo de obra!");
  })

  //document.getElementById('form2').submit();
  //$.post('http://localhost:8080/informacion');
//$.post('http://localhost:8080/informacion');
  //alert("Día: " + fecha.getDate() + "\nMes: " + (fecha.getMonth() + 1) + "\nAño: " + fecha.getFullYear());
  //alert(fecha);
//  alert(f);

  $("#btnCalcular").button().on("click", function(event) {
    var cantidadpc1 = parseFloat(document.getElementById('prec1').value);
    var prevu1 = parseFloat(document.getElementById('prevu1').value);
    document.getElementById('prevt1').value = cantidadpc1 * prevu1;
    var prevt = parseFloat(document.getElementById('prevt1').value);
    var divisor = parseFloat(document.getElementById('nMetros').value);
    document.getElementById('preliminares').setAttribute("checked", "true");
    document.getElementById('prepf1').value = parseFloat(prevt / divisor).toFixed(2);

    var cantidadpc2 = parseFloat(document.getElementById('prec2').value);
    var prevu2 = parseFloat(document.getElementById('prevu2').value);
    document.getElementById('prevt2').value = cantidadpc2 * prevu2;
    var prevt2 = parseFloat(document.getElementById('prevt2').value);
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepf2').value = parseFloat(prevt2 / divisor).toFixed(2);

    var cantidadpc3 = parseFloat(document.getElementById('prec3').value);
    var prevu3 = parseFloat(document.getElementById('prevu3').value);
    document.getElementById('prevt3').value = cantidadpc3 * prevu3;
    var prevt3 = parseFloat(document.getElementById('prevt3').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepf3').value = parseFloat(prevt3 / divisor).toFixed(2);

    var cantidadpc4 = parseFloat(document.getElementById('prec4').value);
    var prevu4 = parseFloat(document.getElementById('prevu4').value);
    document.getElementById('prevt4').value = cantidadpc4 * prevu4;
    var prevt4 = parseFloat(document.getElementById('prevt4').value);
    //  document.getElementById('enchape').setAttribute("checked", "true");
    document.getElementById('prepf4').value = parseFloat(prevt4 / divisor).toFixed(2);

    var cantidadpc5 = parseFloat(document.getElementById('prec5').value);
    var prevu5 = parseFloat(document.getElementById('prevu5').value);
    document.getElementById('prevt5').value = cantidadpc5 * prevu5;
    var prevt5 = parseFloat(document.getElementById('prevt5').value);
    //  document.getElementById('pintura').setAttribute("checked", "true");
    document.getElementById('prepf5').value = parseFloat(prevt5 / divisor).toFixed(2);

    var cantidadpc6 = parseFloat(document.getElementById('prec6').value);
    var prevu6 = parseFloat(document.getElementById('prevu6').value);
    document.getElementById('prevt6').value = cantidadpc6 * prevu6;
    var prevt6 = parseFloat(document.getElementById('prevt6').value);
    //  document.getElementById('aparatos').setAttribute("checked", "true");
    document.getElementById('prepf6').value = parseFloat(prevt6 / divisor).toFixed(2);

    var cantidadpc7 = parseFloat(document.getElementById('prec7').value);
    var prevu7 = parseFloat(document.getElementById('prevu7').value);
    document.getElementById('prevt7').value = cantidadpc7 * prevu7;
    var prevt7 = parseFloat(document.getElementById('prevt7').value);
    //  document.getElementById('aseo').setAttribute("checked", "true");
    document.getElementById('prepf7').value = parseFloat(prevt7 / divisor).toFixed(2);

    var cantidadpc8 = parseFloat(document.getElementById('prec8').value);
    var prevu8 = parseFloat(document.getElementById('prevu8').value);
    document.getElementById('prevt8').value = cantidadpc8 * prevu8;
    var prevt8 = parseFloat(document.getElementById('prevt8').value);
    //  document.getElementById('aseo').setAttribute("checked", "true");
    document.getElementById('prepf8').value = parseFloat(prevt8 / divisor).toFixed(2);

    var cantidadpc9 = parseFloat(document.getElementById('prec9').value);
    var prevu9 = parseFloat(document.getElementById('prevu9').value);
    document.getElementById('prevt9').value = cantidadpc9 * prevu9;
    var prevt9 = parseFloat(document.getElementById('prevt9').value);
    //  document.getElementById('aseo').setAttribute("checked", "true");
    document.getElementById('prepf9').value = parseFloat(prevt9 / divisor).toFixed(2);
    //alert(parseFloat(prevt9).toFixed(2));
    //var valortotal = parseFloat(prevt1) + parseFloat(prevt2) + parseFloat(prevt3) + parseFloat(prevt4)+ parseFloat(prevt5) + parseFloat(prevt6) + parseFloat(prevt7) + parseFloat(prevt8) + parseFloat(prevt9);
  //  alert(prevt9);
  //  alert(prevt8 + prevt2);
    document.getElementById('valt').value = parseFloat(prevt + prevt2 + prevt3 + prevt4 + prevt5 + prevt6 + prevt7 + prevt8 + prevt9).toFixed(2);
    document.getElementById('precfm').value = parseFloat((prevt + prevt2 + prevt3 + prevt4 + prevt5 + prevt6 + prevt7 + prevt8 + prevt9) / divisor).toFixed(2);
    document.getElementById('vuxmpre').value = document.getElementById('precfm').value;
    document.getElementById('vtpre').value = document.getElementById('precfm').value * divisor;
    preliminares = document.getElementById('precfm').value * divisor;
    //alert(document.getElementById('precfm').value * divisor);
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
  })


  $("#btnCalcularDemo").button().on("click", function(event) {
    var cantidadpcdemo1 = parseFloat(document.getElementById('precdemo1').value);
    var prevudemo1 = parseFloat(document.getElementById('prevudemo1').value);
    document.getElementById('prevtdemo1').value = cantidadpcdemo1 * prevudemo1;
    var prevtdemo = parseFloat(document.getElementById('prevtdemo1').value);
    var divisor = parseFloat(document.getElementById('nMetros').value);
    document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfdemo1').value = parseFloat(prevtdemo / divisor).toFixed(2);

    var cantidadpcdemo2 = parseFloat(document.getElementById('precdemo2').value);
    var prevudemo2 = parseFloat(document.getElementById('prevudemo2').value);
    document.getElementById('prevtdemo2').value = cantidadpcdemo2 * prevudemo2;
    var prevtdemo2 = parseFloat(document.getElementById('prevtdemo2').value);
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfdemo2').value = parseFloat(prevtdemo2 / divisor).toFixed(2);

    var cantidadpcdemo3 = parseFloat(document.getElementById('precdemo3').value);
    var prevudemo3 = parseFloat(document.getElementById('prevudemo3').value);
    document.getElementById('prevtdemo3').value = cantidadpcdemo3 * prevudemo3;
    var prevtdemo3 = parseFloat(document.getElementById('prevtdemo3').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfdemo3').value = parseFloat(prevtdemo3 / divisor).toFixed(2);

    document.getElementById('valtdemo').value = parseFloat(prevtdemo + prevtdemo2 + prevtdemo3).toFixed(2);
    document.getElementById('precfmdemo').value = parseFloat((prevtdemo + prevtdemo2 + prevtdemo3) / divisor).toFixed(2);
    document.getElementById('vuxmdem').value = document.getElementById('precfmdemo').value;
    document.getElementById('vtdem').value = document.getElementById('precfmdemo').value * divisor;
    demoliciones = document.getElementById('precfmdemo').value * divisor;
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
  })

  $("#btnCalcularPan").button().on("click", function(event) {
    var cantidadpcpan1 = parseFloat(document.getElementById('precpan1').value);
    var prevupan1 = parseFloat(document.getElementById('prevupan1').value);
    document.getElementById('prevtpan1').value = cantidadpcpan1 * prevupan1;
    var prevtpan = parseFloat(document.getElementById('prevtpan1').value);
    var divisor = parseFloat(document.getElementById('nMetros').value);
    document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfpan1').value = parseFloat(prevtpan / divisor).toFixed(2);

    var cantidadpcpan2 = parseFloat(document.getElementById('precpan2').value);
    var prevupan2 = parseFloat(document.getElementById('prevupan2').value);
    document.getElementById('prevtpan2').value = cantidadpcpan2 * prevupan2;
    var prevtpan2 = parseFloat(document.getElementById('prevtpan2').value);
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfpan2').value = parseFloat(prevtpan2 / divisor).toFixed(2);

    var cantidadpcpan3 = parseFloat(document.getElementById('precpan3').value);
    var prevupan3 = parseFloat(document.getElementById('prevupan3').value);
    document.getElementById('prevtpan3').value = cantidadpcpan3 * prevupan3;
    var prevtpan3 = parseFloat(document.getElementById('prevtpan3').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfpan3').value = parseFloat(prevtpan3 / divisor).toFixed(2);

    var cantidadpcpan4 = parseFloat(document.getElementById('precpan4').value);
    var prevupan4 = parseFloat(document.getElementById('prevupan4').value);
    document.getElementById('prevtpan4').value = cantidadpcpan4 * prevupan4;
    var prevtpan4 = parseFloat(document.getElementById('prevtpan4').value);
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfpan4').value = parseFloat(prevtpan4 / divisor).toFixed(2);

    var cantidadpcpan5 = parseFloat(document.getElementById('precpan5').value);
    var prevupan5 = parseFloat(document.getElementById('prevupan5').value);
    document.getElementById('prevtpan5').value = cantidadpcpan5 * prevupan3;
    var prevtpan5 = parseFloat(document.getElementById('prevtpan5').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfpan5').value = parseFloat(prevtpan5 / divisor).toFixed(2);

    var cantidadpcpan6 = parseFloat(document.getElementById('precpan6').value);
    var prevupan6 = parseFloat(document.getElementById('prevupan6').value);
    document.getElementById('prevtpan6').value = cantidadpcpan6 * prevupan6;
    var prevtpan6 = parseFloat(document.getElementById('prevtpan6').value);
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfpan6').value = parseFloat(prevtpan6 / divisor).toFixed(2);

    var cantidadpcpan7 = parseFloat(document.getElementById('precpan7').value);
    var prevupan7 = parseFloat(document.getElementById('prevupan7').value);
    document.getElementById('prevtpan7').value = cantidadpcpan7 * prevupan7;
    var prevtpan7 = parseFloat(document.getElementById('prevtpan7').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfpan7').value = parseFloat(prevtpan7 / divisor).toFixed(2);

    document.getElementById('valtpan').value = parseFloat(prevtpan + prevtpan2 + prevtpan3 + prevtpan4 + prevtpan5 + prevtpan6 + prevtpan7).toFixed(2);
    document.getElementById('precfmpan').value = parseFloat((prevtpan + prevtpan2 + prevtpan3 + prevtpan4 + prevtpan5 + prevtpan6 + prevtpan7) / divisor).toFixed(2);
    document.getElementById('vuxmpan').value = document.getElementById('precfmpan').value;
    document.getElementById('vtpan').value = document.getElementById('precfmpan').value * divisor;
    panetes = document.getElementById('precfmpan').value * divisor;;
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
  })

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
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfen2').value = parseFloat(prevten2 / divisor).toFixed(2);

    var cantidadpcen3 = parseFloat(document.getElementById('precen3').value);
    var prevuen3 = parseFloat(document.getElementById('prevuen3').value);
    document.getElementById('prevten3').value = cantidadpcen3 * prevuen3;
    var prevten3 = parseFloat(document.getElementById('prevten3').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfen3').value = parseFloat(prevten3 / divisor).toFixed(2);

    var cantidadpcen4 = parseFloat(document.getElementById('precen4').value);
    var prevuen4 = parseFloat(document.getElementById('prevuen4').value);
    document.getElementById('prevten4').value = cantidadpcen4 * prevuen4;
    var prevten4 = parseFloat(document.getElementById('prevten4').value);
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfen4').value = parseFloat(prevten4 / divisor).toFixed(2);

    var cantidadpcen5 = parseFloat(document.getElementById('precen5').value);
    var prevuen5 = parseFloat(document.getElementById('prevuen5').value);
    document.getElementById('prevten5').value = cantidadpcen5 * prevuen5;
    var prevten5 = parseFloat(document.getElementById('prevten5').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfen5').value = parseFloat(prevten5 / divisor).toFixed(2);

    document.getElementById('valten').value = parseFloat(prevten + prevten2 + prevten3 + prevten4 + prevten5).toFixed(2);
    document.getElementById('precfmen').value = parseFloat((prevten + prevten2 + prevten3 + prevten4 + prevten5) / divisor).toFixed(2);
    document.getElementById('vuxmen').value = document.getElementById('precfmen').value;
    document.getElementById('vten').value = document.getElementById('precfmen').value * divisor;
    enchape = document.getElementById('precfmen').value * divisor;
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
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
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
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
    //  document.getElementById('demoliciones').setAttribute("checked", "true");
    document.getElementById('prepfin2').value = parseFloat(prevtin2 / divisor).toFixed(2);

    var cantidadpcin3 = parseFloat(document.getElementById('precin3').value);
    var prevuin3 = parseFloat(document.getElementById('prevuin3').value);
    document.getElementById('prevtin3').value = cantidadpcin3 * prevuin3;
    var prevtin3 = parseFloat(document.getElementById('prevtin3').value);
    //  document.getElementById('panetes').setAttribute("checked", "true");
    document.getElementById('prepfin3').value = parseFloat(prevtin3 / divisor).toFixed(2);

    var cantidadpcin4 = parseFloat(document.getElementById('precin4').value);
    var prevuin4 = parseFloat(document.getElementById('prevuin4').value);
    document.getElementById('prevtin4').value = cantidadpcin4 * prevuin4;
    var prevtin4 = parseFloat(document.getElementById('prevtin4').value);
    //  document.getElementById('enchape').setAttribute("checked", "true");
    document.getElementById('prepfin4').value = parseFloat(prevtin4 / divisor).toFixed(2);

    var cantidadpcin5 = parseFloat(document.getElementById('precin5').value);
    var prevuin5 = parseFloat(document.getElementById('prevuin5').value);
    document.getElementById('prevtin5').value = cantidadpcin5 * prevuin5;
    var prevtin5 = parseFloat(document.getElementById('prevtin5').value);
    //  document.getElementById('pintura').setAttribute("checked", "true");
    document.getElementById('prepfin5').value = parseFloat(prevtin5 / divisor).toFixed(2);

    var cantidadpcin6 = parseFloat(document.getElementById('precin6').value);
    var prevuin6 = parseFloat(document.getElementById('prevuin6').value);
    document.getElementById('prevtin6').value = cantidadpcin6 * prevuin6;
    var prevtin6 = parseFloat(document.getElementById('prevtin6').value);
    //  document.getElementById('aparatos').setAttribute("checked", "true");
    document.getElementById('prepfin6').value = parseFloat(prevtin6 / divisor).toFixed(2);

    var cantidadpcin7 = parseFloat(document.getElementById('precin7').value);
    var prevuin7 = parseFloat(document.getElementById('prevuin7').value);
    document.getElementById('prevtin7').value = cantidadpcin7 * prevuin7;
    var prevtin7 = parseFloat(document.getElementById('prevtin7').value);
    //  document.getElementById('aseo').setAttribute("checked", "true");
    document.getElementById('prepfin7').value = parseFloat(prevtin7 / divisor).toFixed(2);

    var cantidadpcin8 = parseFloat(document.getElementById('precin8').value);
    var prevuin8 = parseFloat(document.getElementById('prevuin8').value);
    document.getElementById('prevtin8').value = cantidadpcin8 * prevuin8;
    var prevtin8 = parseFloat(document.getElementById('prevtin8').value);
    //  document.getElementById('aseo').setAttribute("checked", "true");
    document.getElementById('prepfin8').value = parseFloat(prevtin8 / divisor).toFixed(2);

    var cantidadpcin9 = parseFloat(document.getElementById('precin9').value);
    var prevuin9 = parseFloat(document.getElementById('prevuin9').value);
    document.getElementById('prevtin9').value = cantidadpcin9 * prevuin9;
    var prevtin9 = parseFloat(document.getElementById('prevtin9').value);
    //  document.getElementById('aseo').setAttribute("checked", "true");
    document.getElementById('prepfin9').value = parseFloat(prevtin9 / divisor).toFixed(2);

    var cantidadpcin10 = parseFloat(document.getElementById('precin10').value);
    var prevuin10 = parseFloat(document.getElementById('prevuin10').value);
    document.getElementById('prevtin10').value = cantidadpcin10 * prevuin10;
    var prevtin10 = parseFloat(document.getElementById('prevtin10').value);
    //  document.getElementById('aseo').setAttribute("checked", "true");
    document.getElementById('prepfin10').value = parseFloat(prevtin10 / divisor).toFixed(2);
    //alert(parseFloat(prevt9).toFixed(2));
    //var valortotal = parseFloat(prevt1) + parseFloat(prevt2) + parseFloat(prevt3) + parseFloat(prevt4)+ parseFloat(prevt5) + parseFloat(prevt6) + parseFloat(prevt7) + parseFloat(prevt8) + parseFloat(prevt9);
  //  alert(prevt9);
  //  alert(prevt8 + prevt2);
    document.getElementById('valtin').value = parseFloat(prevtin + prevtin2 + prevtin3 + prevtin4 + prevtin5 + prevtin6 + prevtin7 + prevtin8 + prevtin9 + prevtin10).toFixed(2);
    document.getElementById('precfmin').value = parseFloat((prevtin + prevtin2 + prevtin3 + prevtin4 + prevtin5 + prevtin6 + prevtin7 + prevtin8 + prevtin9 + prevtin10) / divisor).toFixed(2);
    document.getElementById('vuxmapar').value = document.getElementById('precfmin').value;
    document.getElementById('vtapar').value = document.getElementById('precfmin').value * divisor;
    aparatos = document.getElementById('precfmin').value * divisor;
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
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
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
  })

  $("#btnCalcularAd").button().on("click", function(event) {
    var cantidadpcpad1 = parseFloat(document.getElementById('precpad1').value);
    var prevupad1 = parseFloat(document.getElementById('prevupad1').value);
    document.getElementById('prevtpad1').value = cantidadpcpad1 * prevupad1;
    var prevtpad = parseFloat(document.getElementById('prevtpad1').value);
    var divisor = parseFloat(document.getElementById('nMetros').value);
    //document.getElementById('adicionales').setAttribute("checked", "true");
    document.getElementById('prepfpad1').value = parseFloat(prevtpad / divisor).toFixed(2);
    document.getElementById('valtpad').value = parseFloat(prevtpad).toFixed(2);
    document.getElementById('precfmpad').value = parseFloat((prevtpad) / divisor).toFixed(2);
  //  document.getElementById('vuxmad').value = document.getElementById('precfmpad').value;
  //  document.getElementById('vtpad').value = document.getElementById('precfmpad').value * divisor;
    adicionales = document.getElementById('precfmpad').value * divisor;
    document.getElementById('adic').value = adicionales.toFixed(2);
    //parseFloat(valortotal).toFixed(2);
    //document.getElementById('form2').submit();
    //$.post('http://localhost:8080/informacion');
  })

  $("#btnTot").button().on("click", function(event) {
      document.getElementById('subt').value = demoliciones + preliminares + enchape + aparatos +aseo + panetes + pintura;
      document.getElementById('tota').value = demoliciones + preliminares + enchape + aparatos +aseo + panetes + pintura + adicionales;
      document.getElementById('valor').value = demoliciones + preliminares + enchape + aparatos +aseo + panetes + pintura + adicionales;
  })

  $("#btnSave").button().on("click", function(event) {
      alert("Cotizacón Guardada.");
  })
});
