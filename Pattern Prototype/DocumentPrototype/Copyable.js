class Copyable {
    clone() {
        throw new Error("clone() method must be implemented");
    }
}

module.exports = Copyable;