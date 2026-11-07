const Developer = require("./Developer");

class JavaDeveloper extends Developer{
    writeCode(){
        console.log("Java Developer is writing code in Java")
    }
}
module.exports=JavaDeveloper