const FileSystem =require("/.FileSystem")
class Folder extends FileSystem{
    constructor(name){
        super()
        this.name=name
        this.children=[]
}
    add (item){
    this.children.push(item)
}
remove (item){
    this.children=this.children.filter(child=> child !==item)
}
show(){
    console.log(this.name)

        this.children.forEach(child=>{
            child.show()
        })
    }
}
module.exports=Folder;