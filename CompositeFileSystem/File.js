const FileSystem=require("./FileSystem")
class File extends FileSystem{
    constructor(name){
        super()
        this.name=name
    }
    
}
module.exports=File