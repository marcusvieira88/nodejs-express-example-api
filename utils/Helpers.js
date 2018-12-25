var bcrypt = require('bcrypt');

export default class Helpers {

    /**
     * Generate the hash based in a provided value
     * @param value - data for generate hash
     * @return string
     */
    static generateHash(value) {
        return bcrypt.hashSync(value, 12);
    }

    /**
     * Compare hash with a value
     * @param value - value that will be checked
     * @param hash - hash value
     * @return boolean - true if its a hash of
     * the provided value
     */
    static compareHash(value, hash) {
        return bcrypt.compare(value, hash);
    }
}



