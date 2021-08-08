const postgressConnection = require('../database');

class ADNRepository {

    async ADNChainInDatabase(chain, nMutations, callback) {
        await postgressConnection
            .query(`SELECT * FROM dat."DNA" where "ChainValue" = '${chain}'`)
            .then(async (result) => {
                if (result.rows == 0) {
                    var result = await this.saveInDB(chain, nMutations);
                    return callback(result);
                }
                return callback(true);
            })
            .catch((err) => {
                return callback(err);
            });
    }

    async saveInDB(chain, nMutation) {
        var isMutation = false;
        if (nMutation > 1)
            isMutation = true;
        await postgressConnection.query(`INSERT INTO dat."DNA" VALUES (DEFAULT,'${chain}', ${nMutation}, ${isMutation})`)
            .then(result => {
                return true;
            })
            .catch(err => {
                return err;
            });
    }

    getList(callback) {
        postgressConnection.query(`SELECT * FROM dat."DNA"`)
            .then((result) => {
                return callback(result.rows);
            }).catch((err) => {
                return callback(err);
            });
    }

    getStats(callback) {
        postgressConnection.query(`SELECT * FROM dat."DNA"`)
            .then((table) => {
                let nMutantes = 0;
                let nNoMutantes = 0;
                table.rows.forEach(row => {
                    if (row['IsMutante'])
                        nMutantes++;
                    else
                        nNoMutantes++;
                });
                let min = Math.min(nMutantes, nNoMutantes);
                let max = Math.max(nMutantes, nNoMutantes);
                let ratio = min / max;
                return callback({ ratio, nMutantes, nNoMutantes });
            }).catch((err) => {
                return callback(err);
            });
    }
}

module.exports = ADNRepository;