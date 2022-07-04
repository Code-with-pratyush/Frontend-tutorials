console.log("This is module javascript");
function average(arr){
    let sum =0 ;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}
module.exports = {
    avg : average,
    name :"Prratyuh",
    repo : "Github",

}