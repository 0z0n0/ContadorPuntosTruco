$(document).ready(function () {
  
  var max = 30;

  $("#inicio").on("click", fnInicio);

  function fnInicio() {
    var nomEq1 = $("#eq1");
  var nomEq2 = $("#eq2")
    
    $("#pant1").css("display", "none");
    $("#pant2").css("display", "flex");
    $("#max").html("a "+ max);
    $("#ne1").html(nomEq1.val());
    $("#ne2").html(nomEq2.val());
    $("#p1").html("0");
    $("#p2").html("0");
    $(".ImgPuntos").attr("src", "Recursos/0.png")
    $("#inicio").addClass("seleccionado");
  }

  $("#a24").on("click", fnSetearA24);
  $("#a30").on("click", fnSetearA30);

  function fnSetearA24(){
    console.log("me apretaste")
    max = 24;
    $("#a24").addClass("seleccionado");
    $("#a30").removeClass("seleccionado");
  }

  function fnSetearA30(){
    max = 30;
    $("#a30").addClass("seleccionado");
    $("#a24").removeClass("seleccionado");
  }

  $("#s1").on("click",function(){fnSumar(1)} );
  $("#s2").on("click",function(){fnSumar(2)});
  $("#r1").on("click",function(){fnRestar(1)});
  $("#r2").on("click",function(){fnRestar(2)});

  function fnSumar(Equipo){
    puntos = parseInt($("#p"+Equipo).html());
    if(puntos < max){
      puntos ++;
    $("#p"+Equipo).html(puntos);
    dibujarpalitos(Equipo);
    }
  }

  function fnRestar(Equipo){
    puntos = parseInt($("#p"+Equipo).html());
    if(puntos > 0){
      puntos --;
    $("#p"+Equipo).html(puntos);
    dibujarpalitos(Equipo);
    }
  }

  function dibujarpalitos(Equipo){
    palitosADibujar = parseInt($("#p"+Equipo).html());
    console.log(palitosADibujar);
    for (var i = 1; i <= 6; i++) {
      id = "#p"+Equipo+i;
      console.log(id);
      if(max ==24 && i == 3 && palitosADibujar >= 2){
        $(id).attr("src", "Recursos/2.png")
        palitosADibujar = palitosADibujar - 2;
      }else{
        if (palitosADibujar >= 5){
          $(id).attr("src", "Recursos/5.png")
          palitosADibujar = palitosADibujar - 5;
        }else{
          $(id).attr("src","Recursos/"+palitosADibujar+".png");
          palitosADibujar = 0
        }
      }      
  }
  }

  $("#fin").on("click", function(){
    $("#pant2").css("display", "none");
    $("#pant1").css("display", "flex");
  })

});
