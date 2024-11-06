var string_list = [];
var number_list = [];
var differences = [];
var arr_mean;
var mean_text = "1.) Mean\n  Mean = ";
var mean_answer = "  Mean = ";
const limit = ",";

let solvebtn = document.getElementById("solvebtn");
let clearbtn = document.getElementById("clearbtn");

solvebtn.addEventListener("click",solve);
clearbtn.addEventListener("click",clear);
/*todo: 
1. solve mean then print
2. get differences (xi-mean) then print
3. get differences squared then print
4. get sum of differences squared
5. divide sum of differences squared by N
6. get square root of variance
7. get standard deviation then biglang sumayaw

*/



function solve(e){
    var user_input = document.getElementById("raw_data_input").value;
    console.log(user_input);

    string_list = user_input.split(limit);
    number_list = string_list.map(Number); //typecast str to int
    console.log(number_list);
    
    //1.5 solve mean
    function mean(number_list){
        var sum = number_list.reduce(function(storage,a){
            return storage + a;
        },0);
        return sum/number_list.length;
    }
    // print mean
    number_list.forEach(number);
    function number(value){
        if(value === number_list[number_list.length-1]){
            mean_text += value + " / "+number_list.length+"\n";
        }
        else{
            mean_text += value + " + ";  
        } 
    }
    arr_mean = mean(number_list);
    mean_answer += mean(number_list) + "\n";
    document.getElementById("computed_answer").value = mean_text + mean_answer;
    console.log("The mean is ",mean(number_list)); //check
    
    
    //2.5 differences xi-mean
    number_list.forEach(numMeandiff);
    function numMeandiff(value){
        differences.push(value-arr_mean);
    }
    console.log("These are numbers",differences);
    //2.5 print differences
    
}

function clear(e){
    document.getElementById("raw_data_input").value = ""; 
}