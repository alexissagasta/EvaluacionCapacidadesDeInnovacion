//evaluacion.js

class gestionarEvaluacion {

    registrarEvaluacion = async (db, evaluacion, tipo) => {
        try {
            var dbo = db.db("EvaluacionCapacidadesDeInnovacion");
            const res = await dbo.collection(tipo).updateOne(
                { seccion: tipo, email: evaluacion.email, empresa: evaluacion.empresa },
                {
                    $set: {
                        email: evaluacion.email,
                        empresa: evaluacion.empresa,
                        preguntas: evaluacion.preguntas,
                        seccion: tipo,
                        puntaje: evaluacion.puntaje
                    }
                },
                { upsert: true }
            )
            console.log("Una evaluacion ha sido agregada");
            return res;

        } catch (e) {
            console.error(e);
        }
    }

    borrarEvaluacionPorId = async (db, id, email) => {
        try {
            var dbo = db.db("EvaluacionCapacidadesDeInnovacion");
            const res = await dbo.collection("evaluaciones").deleteOne({ "_id": id });

            console.log({ realizado: res });
            if (res.deletedCount == 0) {
                console.log("No se encontro la evaluacion!");
                return { msj: "No se encontro la evaluacion!" }
            } else {
                console.log("Una evaluacion ha sido eliminada");
                return { msj: "Una evaluacion ha sido eliminada" }
            }


        } catch (e) {
            console.error(e);
        }

    }

    listarEvaluaciones = async (client, usuario) => {
        try {
            // specify the DB's name
            const db = client.db('EvaluacionCapacidadesDeInnovacion');
            // execute find query
            let secciones = new Object();
            let respuestasEvaluacion = new Object();
            let estrategia = await db.collection('estrategia').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            let organizacion = await db.collection('organizacion').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            let procesoServicio = await db.collection('procesoServicio').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            let involucracionDelCliente = await db.collection('involucracionDelCliente').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            let valor = await db.collection('valor').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            let proceso = await db.collection('proceso').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            let comunidad = await db.collection('comunidad').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            let aprendizajeOrganizacional = await db.collection('aprendizajeOrganizacional').find({ email: usuario.email, empresa: usuario.empresa }).toArray();
            respuestasEvaluacion = { 
            "estrategia": estrategia[0], 
            "organizacion": organizacion[0], 
            "procesoServicio": procesoServicio[0], 
            "involucracionDelCliente": involucracionDelCliente[0], 
            "valor": valor[0], 
            "proceso": proceso[0], 
            "comunidad": comunidad[0], 
            "aprendizajeOrganizacional": aprendizajeOrganizacional[0] 
            }
            //console.log(respuestasEvaluacion);
            return respuestasEvaluacion;
        } catch (e) {
            console.error(e);
        }

    }
}

module.exports = gestionarEvaluacion