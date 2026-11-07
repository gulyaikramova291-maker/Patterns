class DocumentFactory{
    constructor(prototype){ 
        this.prototype=prototype;
    }
    cloneDocument(){
        return this.prototype.clone();
    }
}
module.exports=DocumentFactory;