
const Operations = require("./operations");
const operations = new Operations();


class CheckADN {

    //Aquí es donde busco si existen secuencias de letras repetidas
    buscarMutacion = function (matriz) {
        let regex = /([ATGC])\1{3,4}/;

        //Busco repetidos por filas
        let rows = matriz.filter((string) => {
            return regex.test(string);
        });

        //Busco repetidos por columnas
        let col = operations.extraerCols(matriz).filter((string) => {
            return regex.test(string);
        });

        //Busco repetidos desde la diagonal izquierda
        let diagonalIzquierda = operations.obtenerDiagonalIzquierda(matriz).filter((string) => {
            return regex.test(string);
        });

        //Busco repetidos desde la diagonal derecha
        let diagonalDerecha = operations.obtenerDiagonalDerecha(matriz).filter((string) => {
            let testRegex = regex.test(string);
            // console.log(testRegex);
            return testRegex;
        });

        //Concateno los resultados
        return rows.concat(diagonalDerecha).concat(diagonalIzquierda).concat(col);
    };

    //Función principal
    hasMutation = function (matriz) {
        let blocks = this.buscarMutacion(matriz);
        return blocks.length;
    };

    getMutationNumber = function (matriz) {
        let blocks = this.buscarMutacion(matriz);
        return blocks.length;
    }
}

module.exports = CheckADN;