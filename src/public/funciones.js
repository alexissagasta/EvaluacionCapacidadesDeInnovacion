async function obtenerRespuestas(seccion) {
  let emailRaw = document.getElementById('idEmail').textContent;
  let empresaRaw = document.getElementById('idEmpresa').textContent;
  let email = emailRaw.replace(/\s+/g, '');
  let empresa = empresaRaw.replace(/\s+/g, '');
  if (seccion == "estrategia") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 12; step++) {
      var preguntaActual = document.getElementsByName("EstP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonEstrategia = document.getElementById("btnEstrategia");
    botonEstrategia.textContent = "Estrategia " + suma + "/60"
    botonEstrategia.classList.remove("btn-dark")
    botonEstrategia.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)
    
    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "evaluacion"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "evaluacion", email, empresa);
    alert(mensaje.mensaje)
  }
  if (seccion == "org") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 18; step++) {
      var preguntaActual = document.getElementsByName("orgP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonOrg = document.getElementById("btnOrg");
    botonOrg.textContent = "Organización de la Innovación " + suma + "/90"
    botonOrg.classList.remove("btn-dark")
    botonOrg.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)
    
    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "organizacion"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "organizacion", email, empresa);
    alert(mensaje.mensaje)
  }
  if (seccion == "proServ") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 6; step++) {
      var preguntaActual = document.getElementsByName("proServP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonProServ = document.getElementById("btnProServ");
    botonProServ.textContent = "Preguntas relacionadas con el producto y servicio " + suma + "/30"
    botonProServ.classList.remove("btn-dark")
    botonProServ.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)
    
    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "procesoServicio"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "procesoServicio", email, empresa);
    alert(mensaje.mensaje)
  }
  if (seccion == "invoCliente") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 6; step++) {
      var preguntaActual = document.getElementsByName("invoClienteP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonProServ = document.getElementById("btnInvoCliente");
    botonProServ.textContent = "Preguntas relacionadas con el involucramiento del cliente " + suma + "/30"
    botonProServ.classList.remove("btn-dark")
    botonProServ.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)
    
    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "involucracionDelCliente"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "involucracionDelCliente", email, empresa);
    alert(mensaje.mensaje)
  }
  if (seccion == "valor") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 7; step++) {
      var preguntaActual = document.getElementsByName("valorP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonProServ = document.getElementById("btnValor");
    botonProServ.textContent = "Preguntas relacionadas con la realización de valor " + suma + "/35"
    botonProServ.classList.remove("btn-dark")
    botonProServ.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)
    
    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "valor"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "valor", email, empresa);
    alert(mensaje.mensaje)
  }
  if (seccion == "proceso") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 5; step++) {
      var preguntaActual = document.getElementsByName("procesoP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonProServ = document.getElementById("btnProceso");
    botonProServ.textContent = "Preguntas relacionadas con el proceso " + suma + "/25"
    botonProServ.classList.remove("btn-dark")
    botonProServ.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)

    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "proceso"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "proceso", email, empresa);
    alert(mensaje.mensaje)
  }
  if (seccion == "comunidad") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 6; step++) {
      var preguntaActual = document.getElementsByName("comunidadP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonProServ = document.getElementById("btnComunidad");
    botonProServ.textContent = "Preguntas relacionadas con la comunidad " + suma + "/30"
    botonProServ.classList.remove("btn-dark")
    botonProServ.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)
    
    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "comunidad"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "comunidad", email, empresa);
    alert(mensaje.mensaje)
  }
  if (seccion == "aprzjOrg") {
    let preguntas = new Object();
    let suma = 0;
    for (let step = 0; step < 8; step++) {
      var preguntaActual = document.getElementsByName("aprzjOrgP" + (step + 1));
      var checkedRadio = Array.from(preguntaActual).find((radio) => radio.checked);
      let pregunta = "pregunta " + (step + 1)
      if (checkedRadio == undefined) {
        alert("Tiene que constestar todas las preguntas (Pregunta " + (step + 1) + ")")
        return
      }
      switch (checkedRadio.value) {
        case "Falso":
          suma = suma + 1
          break;
        case "No totalmente cierto":
          suma = suma + 2
          break;
        case "No se / No es aplicable":
          suma = suma + 3
          break;
        case "Casi verdadero":
          suma = suma + 4
          break;
        case "Verdadero":
          suma = suma + 5
          break;
        default:
          return
      }
      preguntas[pregunta] = checkedRadio.value;
    }

    var botonProServ = document.getElementById("btnAprzjOrg");
    botonProServ.textContent = "Preguntas relacionadas con el aprendizaje organizacional " + suma + "/40"
    botonProServ.classList.remove("btn-dark")
    botonProServ.classList.add("btn-success")
    console.log(preguntas)
    console.log(suma)
    
    //se guarda la evaluacion
    let evaluacion = new Object();
    evaluacion["email"] = email
    evaluacion["empresa"] = empresa
    evaluacion["preguntas"] = preguntas
    evaluacion["seccion"] = "aprendizajeOrganizacional"
    evaluacion["puntaje"] = suma
    console.log(evaluacion)
    let mensaje = await guardarEvaluacion(evaluacion, "aprendizajeOrganizacional", email, empresa);
    alert(mensaje.mensaje)
  }
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

function calcularNivel(IMD) {
  if (IMD < 30) {
    return {
      nivel: "Nivel 1",
      descripcion: "Empresas que tienen ciertas iniciativas digitales diferentes, independientes y dispersas en la empresa. Se hace necesario diseñar una estrategia digital",
      rango: "Nivel Básico entre 0 y 30 puntos"
    }
  }
  if (IMD > 30 && IMD <= 60) {
    return {
      nivel: "Nivel 2",
      descripcion: "Empresas que empiezan a formalizar algún plan digital en área concreta de la compañía. Aceptan el valor que aportan las tecnologías a los procesos de negocio. Es necesario un plan de crecimiento digital",
      rango: "Nivel Inicial entre 31 y 60 puntos"
    }
  }
  if (IMD > 60 && IMD <= 80) {
    return {
      nivel: "Nivel 3",
      descripcion: "Empresas que están implementando el plan de transformación digital de forma holística e integrada siguiendo una hoja de ruta (framework). Es necesario asegurar el avance de la Transformación digital",
      rango: "Nivel Innovador entre 61 y 80 puntos"
    }
  }
  if (IMD > 80 && IMD <= 100) {
    return {
      nivel: "Nivel 4",
      descripcion: "Empresas que han desarrollado su negocio digital. Organizaciones ágiles innovadoras, flexibles, conectadas, colaborativas, abiertas y data driven que se adaptan de forma continua a los cambios. Es necesario mantener y fortalecer la estrategia digital",
      rango: "Nivel transformador entre 81 y 100 puntos"
    }
  }
}

async function guardarEvaluacion(evaluacion, tipo) {
  //
  const response = await fetch("/guardarEvaluacion/" + tipo, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(evaluacion)
  })
  console.log(JSON.stringify(evaluacion));
  const data = await response.json();
  return data
}

async function obtenerPorcentajesEv() {
  const response = await fetch("/obtenerPorcentajesEv", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  const data = await response.json();
  return data
}

async function evaluar() {

  let respuestas = obtenerRespuestas()
  let porcentajesDom = await obtenerPorcentajesEv()
  console.log(porcentajesDom)
  const evaluacion = document.getElementById('ev');

  let puntosD1 = (respuestas[0] * porcentajesDom[0].porcentajeD1) / 40
  let puntosD2 = (respuestas[1] * porcentajesDom[0].porcentajeD2) / 25
  let puntosD3 = (respuestas[2] * porcentajesDom[0].porcentajeD3) / 25
  let puntosD4 = (respuestas[3] * porcentajesDom[0].porcentajeD4) / 25
  let puntosD5 = (respuestas[4] * porcentajesDom[0].porcentajeD5) / 25
  let IMD = puntosD1 + puntosD2 + puntosD3 + puntosD4 + puntosD5
  let nivel = calcularNivel(IMD)
  let emailRaw = document.getElementById('idEmail').textContent;
  let empresaRaw = document.getElementById('idEmpresa').textContent;
  let email = emailRaw.replace(/\s+/g, '');
  let empresa = empresaRaw.replace(/\s+/g, '');
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  let fecha = hoy.toLocaleString();
  let idRandom = generateRandomInteger(100000000000);

  if (evaluacion == null && !isNaN(IMD)) {
    const div = document.createElement('div');
    div.className = 'agregado rounded-3';
    div.id = "ev";
    div.innerHTML = `
        <table class="table table-bordered table-dark table-hover">
          <tr>
            <th scope="col" style="text-align:center">Dominios</th>
            <th scope="col" style="text-align:center;width:10%;">Suma</th>
            <th scope="col" style="text-align:center;width:10% ">Valor</th>
            <th colspan="2" scope="col" style="text-align:center;width:10%">Puntos</th>
          </tr>
          <tr>
            <td scope="row">
              Estrategia y cultura digital
            </td>
            <td id="res1">
              `+ respuestas[0] + `
            </td>
            <td>
            `+ porcentajesDom[0].porcentajeD1 + "%" + `
            </td>
            <td id="pd1" colspan="2">
              `+ puntosD1 + `
            </td>
          </tr>
          <tr>
            <td scope="row">
              Experiencia del cliente
            </td>
            <td id="res2">
              `+ respuestas[1] + `
            </td>
            <td>
            `+ porcentajesDom[0].porcentajeD2 + "%" + `
            </td>
            <td id="pd2" colspan="2">
              `+ puntosD2 + `
            </td>
          </tr>
          <tr>
            <td scope="row">
              Gestión del talento
            </td>
            <td id="res3">
              `+ respuestas[2] + `
            </td>
            <td>
            `+ porcentajesDom[0].porcentajeD3 + "%" + `
            </td>
            <td id="pd3" colspan="2">
              `+ puntosD3 + `
            </td>
          </tr>
          <tr>
            <td scope="row">
              Productos, servicios y procesos
            </td>
            <td id="res4">
              `+ respuestas[3] + `
            </td>
            <td>
            `+ porcentajesDom[0].porcentajeD4 + "%" + `
            </td>
            <td id="pd4" colspan="2">
              `+ puntosD4 + `
            </td>
          </tr>
          <tr>
            <td scope="row">
              Infraestructura y tecnología
            </td>
            <td id="res5">
              `+ respuestas[4] + `
            </td>
            <td>
            `+ porcentajesDom[0].porcentajeD5 + "%" + `
            </td>
            <td id="pd5" colspan="2">
              `+ puntosD5 + `
            </td>
          </tr>
          <tr>
            <td colspan="3" scope="row">
              Suma total de Índice de Madurez Digital (IMD)
            </td>
            <td id="imd">
              `+ IMD + `
            </td>
            <td id="niv" style="text-align:center;width:20%;">
              `+ nivel.nivel + `
            </td>
          </tr>
          <tr>
            <td colspan="4" scope="row">
              Fecha
            </td>
            <td id="fecha" style="text-align:center;width:20%;">
              `+ fecha + `
            </td>
          </tr>
        </table>
        <br>`;
    document.getElementById('evaluacion').appendChild(div);

    const div2 = document.createElement('div');
    div2.className = 'agregado rounded-3';
    div2.id = "desc";
    div2.innerHTML = `
            <table class="table table-bordered table-dark table-hover">
              <tr>
                <th scope="col" style="text-align:center ">Interpretación de Resultados</th>
              </tr>
              <tr>
                <td id="rango" scope="row" style="text-align:center">`+ (nivel.nivel + ": " + nivel.rango) + `</td>
              </tr>
              <tr>
                <td id="descripcion" scope="row" style="text-align:center ">`+ nivel.descripcion + `</td>
              </tr>
            </table>
            <br>
    `;

    document.getElementById('evaluacion').appendChild(div2);

    let evaluacion = {
      "_id": idRandom,
      "email": email,
      "nombreEmpresa": empresa,
      "fecha": fecha,
      "sumaDominio1": respuestas[0],
      "sumaDominio2": respuestas[1],
      "sumaDominio3": respuestas[2],
      "sumaDominio4": respuestas[3],
      "sumaDominio5": respuestas[4],
      "puntosDominio1": puntosD1,
      "puntosDominio2": puntosD2,
      "puntosDominio3": puntosD3,
      "puntosDominio4": puntosD4,
      "puntosDominio5": puntosD5,
      "porcentajeDominio1": porcentajesDom[0].porcentajeD1,
      "porcentajeDominio2": porcentajesDom[0].porcentajeD2,
      "porcentajeDominio3": porcentajesDom[0].porcentajeD3,
      "porcentajeDominio4": porcentajesDom[0].porcentajeD4,
      "porcentajeDominio5": porcentajesDom[0].porcentajeD5,
      "imd": IMD,
      "nivel": nivel.nivel,
      "descripcion": nivel.descripcion,
      "rango": (nivel.nivel + ": " + nivel.rango)
    }
    document.getElementById('divPDF').style.display = 'block';
    console.log(evaluacion)
    await guardarEvaluacion(evaluacion);
  } else {
    if (!isNaN(IMD)) {
      let res1 = document.getElementById('res1');
      let res2 = document.getElementById('res2');
      let res3 = document.getElementById('res3');
      let res4 = document.getElementById('res4');
      let res5 = document.getElementById('res5');

      let pd1 = document.getElementById('pd1');
      let pd2 = document.getElementById('pd2');
      let pd3 = document.getElementById('pd3');
      let pd4 = document.getElementById('pd4');
      let pd5 = document.getElementById('pd5');

      res1.textContent = respuestas[0]
      res2.textContent = respuestas[1]
      res3.textContent = respuestas[2]
      res4.textContent = respuestas[3]
      res5.textContent = respuestas[4]

      pd1.textContent = puntosD1
      pd2.textContent = puntosD2
      pd3.textContent = puntosD3
      pd4.textContent = puntosD4
      pd5.textContent = puntosD5

      let newImd = document.getElementById('imd');
      newImd.textContent = IMD

      let niv = document.getElementById('niv');
      niv.textContent = nivel.nivel

      let descripcion = document.getElementById('descripcion');
      descripcion.textContent = nivel.descripcion

      let rango = document.getElementById('rango');
      rango.textContent = (nivel.nivel + ": " + nivel.rango)

      let fechaElemento = document.getElementById('fecha');
      fechaElemento.textContent = fecha

      let evaluacion = {
        "_id": idRandom,
        "email": email,
        "nombreEmpresa": empresa,
        "fecha": fecha,
        "sumaDominio1": respuestas[0],
        "sumaDominio2": respuestas[1],
        "sumaDominio3": respuestas[2],
        "sumaDominio4": respuestas[3],
        "sumaDominio5": respuestas[4],
        "puntosDominio1": puntosD1,
        "puntosDominio2": puntosD2,
        "puntosDominio3": puntosD3,
        "puntosDominio4": puntosD4,
        "puntosDominio5": puntosD5,
        "porcentajeDominio1": porcentajesDom[0].porcentajeD1,
        "porcentajeDominio2": porcentajesDom[0].porcentajeD2,
        "porcentajeDominio3": porcentajesDom[0].porcentajeD3,
        "porcentajeDominio4": porcentajesDom[0].porcentajeD4,
        "porcentajeDominio5": porcentajesDom[0].porcentajeD5,
        "imd": IMD,
        "nivel": nivel.nivel,
        "descripcion": nivel.descripcion,
        "rango": (nivel.nivel + ": " + nivel.rango)
      }
      await guardarEvaluacion(evaluacion);
    }
  }
}

async function createPDF() {
  let empresaRaw = document.getElementById('idEmpresa').textContent;
  let empresa = empresaRaw.replace(/\s+/g, '');
  var sTable = document.getElementById('ev').innerHTML;
  var sDesc = document.getElementById('desc').innerHTML;

  var style = "<style>";
  style = style + "table {width: 100%;font: 17px Calibri;}";
  style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
  style = style + "padding: 2px 3px;text-align: center;}";
  style = style + "</style>";

  // CREATE A WINDOW OBJECT.
  var win = window.open('', '', 'height=700,width=700');

  win.document.write('<html><head>');
  win.document.write('<h1 style="text-align: center;">' + empresa + '</h1>');
  win.document.write('<title>Calculo</title>');   // <title> FOR PDF HEADER.
  win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
  win.document.write(sDesc);
  win.document.write('</body></html>');

  win.document.close(); 	// CLOSE THE CURRENT WINDOW.

  win.print();    // PRINT THE CONTENTS.
}

