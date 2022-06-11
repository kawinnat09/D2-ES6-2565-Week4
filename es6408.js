//
function greet(name){
    //inner function
    function disPlayName(){
        console.log(`Hi ${name}`)
    }
    //returning function
    //disPlayName()
    return disPlayName
}
//greet = ("Kawinnat")
const g1 = greet('Kawinnat')
g1()