const Copyable = require("./Copyable");

class Document extends Copyable {
    constructor(id, title, content, author, tags) {
        super();

        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.tags = tags;
    }

    clone() {
        return new Document(
            this.id,
            this.title,
            this.content,
            this.author,
            [...this.tags]
        );
    }
}

module.exports = Document;