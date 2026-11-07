class Copyable{
    clone(){
        throw new Error("Метод clone() должен быть реализован в наследнике");
    }
}
module.exports=Copyable;