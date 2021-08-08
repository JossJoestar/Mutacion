const express = require("express");
const router = express.Router();

const pattern = /^[A|T|C|G|a|t|g|c|,| ]*$/;

const CheckADN = require("../helpers/mutante");
const checkADN = new CheckADN();

const ADNRepository = require("../repository/ADN.repository");
const repository = new ADNRepository();

router.get("/", (request, response) => {
    console.log("Somebody is sending an Hello Wolrd");
    response.status(200).send("Hola Mundo");
});

router.post("/mutation", async (request, response) => {
    const dna = request.body.dna;
    dna.map((x) => {
        if (!pattern.test(x)) {
            response
                .status(500)
                .send("Se encontraron caracteres no permitos en la cadena de ADN");
        }
    });
    let checkMutation = checkADN.hasMutation(dna);
    await repository.ADNChainInDatabase(dna.toString().replace(/\s/g, ""), checkMutation, (x) => {
        if (checkMutation > 1) {
            response.status(200).send();
        } else {
            response.status(403).send();

        }
    });
});

router.get("/list", async (req, res) => {
    repository.getList(r => {
        res.send(r);
    });
});

router.get("/stats", async (req, res) => {
    repository.getStats(r => {
        res.json({
            count_mutations: r.nMutantes,
            count_no_mutation: r.nNoMutantes,
            ratio: r.ratio,
        });
    });
});

module.exports = router;
