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

    listarEvaluacionesPorEmail = async (client, email) => {
        try {
            // specify the DB's name
            const db = client.db('EvaluacionCapacidadesDeInnovacion');
            // execute find query
            const items = await db.collection('evaluaciones').find({ "email": email }).toArray();
            //console.log(items);
            return items;
        } catch (e) {
            console.error(e);
        }

    }
}

module.exports = gestionarEvaluacion