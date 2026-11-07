const Developer = require("./Developer");
class CppDeveloper extends Developer{
    writeCode(){
        console.log("C++ Developer is writing code in C++")
    }
}

module.exports=CppDeveloper