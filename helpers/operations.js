class Operations {

    extraerCols(m) {
        return m.map((col, i) => this.extraerCol(m, i).join(""));
    }

    extraerCol(matriz, nCol) {
        let groups = [];
        for (let i = 0; i <= matriz.length - 1; i++) groups.push(matriz[i][nCol]);
        return groups;
    }

    obtenerDiagonalDerecha(m) {
        var s,
            x,
            y,
            d,
            o = [];
        for (s = 0; s < m.length; s++) {
            d = [];
            for (y = s, x = 0; y >= 0; y--, x++) d.push(m[y][x]);
            o.push(d);
        }

        for (s = 1; s < m[0].length; s++) {
            d = [];
            for (y = m.length - 1, x = s; x < m[0].length; y--, x++) d.push(m[y][x]);
            o.push(d);
        }

        return o.map((array) => {
            return array.join("");
        });
    }

    obtenerDiagonalIzquierda(m) {
        let reverse = this.voltearMatriz(m);
        return this.obtenerDiagonalDerecha(reverse);
    }

    voltearCadena(string) {
        return string.split("").reverse().join("");
    }

    voltearMatriz(m) {
        return m.map((string) => {
            return this.voltearCadena(string);
        });
    }

}

module.exports = Operations;