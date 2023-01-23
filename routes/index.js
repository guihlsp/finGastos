import express from "express"; 
// import bolos from "./bolosRoutes.js"
// import recheios from "./recheiosRoutes.js"
// import massas from "./massasRoutes.js"
// import pedidos from "../controllers/pedidosController.js";




const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Inicio"})
    })

    app.use(
        express.json(),
        // bolos,
        // recheios,
        // massas,
        // // pedidos
    )
}

export default routes