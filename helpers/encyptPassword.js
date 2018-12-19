function encryptPass(value) {
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(value, salt);
    return hash
}


// encryptPass("hahahah")
module.exports = encryptPass