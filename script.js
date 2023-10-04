$(document).ready(function () {
  console.log("Funcando");
  let2contadorEq1 = 0;
  let contadorEq2 = 0;
  let puntajeMax = 0;
  let contadorFosforos = 0;
 
  

  $("#inicio").on("click", fnInicio);
  $(".btnPuntaje input[type='button']").on("click", fnpuntajemaximo);
    $("#fin").on("click", fnfin);
  function fnpuntajemaximo() {
    puntajeMax = parseInt(this.id.slice(-2));
    console.log("Puntaje: ", puntajeMax);
  }

  function fnInicio() {
    contadorEq1 = 0;
    contadorEq2 = 0;
    contadorFosforos = 0;
    $("#p1").text(contadorEq1);
    $("#p2").text(contadorEq1);
        
    fnChequeo();
  }

  function fnChequeo(){
    if (puntajeMax === 0){
        alert("Debes Seleccionar la cantidad de puntos")
    }else{
        fnOcultarPantalla();
    fnObtenerNombre();
    fnContador();
    }
  }

  function fnfin() {
    $(".pant1").css("display", "flex");
    $(".pant2").css("display", "none");
    puntajeMax = 0
    for (var i = 1; i < 31;i++){
        $("#p1"+i).attr("src", "Recursos/0.png");
        $("#p2"+i).attr("src", "Recursos/0.png");
    }
  }

  function fnOcultarPantalla(){
    $(".pant1").css("display", "none");
    $(".pant2").css("display", "flex");
  }

  function fnObtenerNombre() {
    let valorNombreEq1 = $("#eq1").val();
    let valorNombreEq2 = $("#eq2").val();
    console.log(valorNombreEq1 + " - " + valorNombreEq2);
    $("#ne1").text(valorNombreEq1);
    $("#ne2").text(valorNombreEq2);
  }

  function fnContador() {
    $("#s1").on("click", fnSumarEq1);
    $("#r1").on("click", fnRestarEq1);
    $("#s2").on("click", fnSumarEq2);
    $("#r2").on("click", fnRestarEq2);
  }

  function fnSumarEq1() {
    if (contadorEq1 < puntajeMax) {
      contadorEq1 += 1;
      $("#p1").text(contadorEq1);
      console.log("Contador equipo 1: " + contadorEq1);
  
      const imagenesPorGrupo = (puntajeMax === 24) ? [5, 5, 2, 5, 5, 2] : [5, 5, 5, 5, 5, 5];
  
      let totalImagenes = 0;
      let grupoActual = 0;
  
      for (let i = 1; i <= 6; i++) {
        totalImagenes += imagenesPorGrupo[grupoActual];
  
        if (contadorEq1 <= totalImagenes) {
          const imagenEnGrupo = contadorEq1 - (totalImagenes - imagenesPorGrupo[grupoActual]) ;
          $(`#p1${i}`).attr("src", "Recursos/" + imagenEnGrupo + ".png");
          break;
        }
  
        grupoActual++;
      }
    }
  }
  

  function fnRestarEq1() {
    if (contadorEq1 > 0) {
      contadorEq1 -= 1;
      $("#p1").text(contadorEq1);
      console.log(contadorEq1);
    }
  }

  function fnSumarEq2() {
    if (contadorEq2 < puntajeMax) {
        contadorEq2 += 1;
        $("#p2").text(contadorEq2);
        console.log("Contador equipo 2: " + contadorEq2);
    
        const imagenesPorGrupo = (puntajeMax === 24) ? [5, 5, 2, 5, 5, 2] : [5, 5, 5, 5, 5, 5];
    
        let totalImagenes = 0;
        let grupoActual = 0;
    
        for (let i = 1; i <= 6; i++) {
          totalImagenes += imagenesPorGrupo[grupoActual];
    
          if (contadorEq2 <= totalImagenes) {
            const imagenEnGrupo = contadorEq2 - (totalImagenes - imagenesPorGrupo[grupoActual]) ;
            $(`#p2${i}`).attr("src", "Recursos/" + imagenEnGrupo + ".png");
            break;
          }
    
          grupoActual++;
        }
      }
  }

  function fnRestarEq2() {
    if (contadorEq2 > 0) {
      contadorEq2 -= 1;
      $("#p2").text(contadorEq2);
      console.log(contadorEq2);
    }
  }
});
