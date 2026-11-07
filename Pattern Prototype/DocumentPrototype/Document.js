const Copyable = require("./Copyable")

class Document extends Copyable{
    constructor (id,title,content,author,tags){
        super()

    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.tags = tags;
    }
}