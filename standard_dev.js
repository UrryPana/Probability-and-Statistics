   /************************************************
  / Standard Deviation Solver in Javascript       /
 / by Urry John Kyle Paña                        /
/ 11/05/2024 - 11/06/2024 11:50 PM              /
***********************************************/
var string_list = new Array();
var number_list = new Array();
var differences = new Array();
var differences_squared = new Array();
var arr_mean;
var arr_variance;
var arr_stdvar;

var mean_text = "a.) Mean\n  Mean = ";
var mean_answer = "  Mean = ";
var arr_diff = "b.) This what we get after subtracting the mean to the list of numbers: ";
var variance1_text = "c.) Variance \n Variance = "
var variance2_text = " Variance = ";
var variance3_text = " Variance = ";
var variance4_text = " Variance = ";
var standarddev_text = "d.) Standard Deviation \n Standard Deviation ="
var standarddev2_text = " Standard Deviation = ";
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
6. get variance
7. get standard deviation

*/

function solve(e){
    var user_input = document.getElementById("raw_data_input").value;
    console.log(user_input);

    string_list = user_input.split(limit);
    number_list = string_list.map(Number); //typecast str to int
    console.log(number_list);
    
    //1.0 solve mean
    function mean(number_list){
        var sum = number_list.reduce(function(storage,a){
            return storage + a;
        },0);
        return sum/number_list.length;
    }
    //1.5 print mean
    number_list.forEach(function(value){
        if(value === number_list[number_list.length-1]){
            mean_text += value + " / "+number_list.length+"\n";
        }
        else{
            mean_text += value + " + ";  
        } 
    });
    arr_mean = mean(number_list);
    mean_answer += mean(number_list) + "\n";
    console.log("The mean is ",mean(number_list)); //check
    
    
    //2.0 differences xi-mean
    number_list.forEach(function(value){
        differences.push(value-arr_mean);
    });
    console.log("These are numbers",differences);
    //2.5 print differences
    arr_diff += differences + "\n";
    
    //3.0 get differences squared
    differences.forEach(function(values){
        differences_squared.push(values**2);
    })
    console.log("squared: ",differences_squared);
    //3.5 print differences squared
    differences.forEach(function(value){
        if(value === differences[differences.length-1]){
            variance1_text += "("+ value +")\u00B2" + " / "+ differences.length+"\n";
        }
        else{
            variance1_text += "("+ value +")\u00B2" + " + ";  
        } 
    });
    //4.0 print differences
    differences.forEach(function(value){
        if(value === differences[differences.length-1]){
            variance2_text += "("+ value**2 +")" + " / "+ differences.length+"\n";
        }
        else{
            variance2_text += "("+ value**2 +")" + " + ";  
        } 
    });
    //5.0 sum of all difference squared
    variance3_text += (differences_squared.reduce(function(storage2,b){
            return storage2 + b;
        },0)) + " / "+ differences_squared.length +"\n";
    //6.0 variance
    var sum_diff_sqr = differences_squared.reduce(function(storage2,b){
        return storage2 + b;
    },0);
    arr_variance = sum_diff_sqr/differences_squared.length;
    variance4_text += sum_diff_sqr/differences_squared.length + "\n";
    //7.0 solve the std deviation
    arr_stdvar = Math.sqrt(arr_variance);
    standarddev_text += "\u221A"+arr_variance+"\n";
    standarddev2_text += arr_stdvar;
    // \(=_=)/
    //output result in html
    document.getElementById("computed_answer").value = mean_text + mean_answer + arr_diff + variance1_text + variance2_text + variance3_text + variance4_text + standarddev_text + standarddev2_text;
}

function clear(e){
    document.getElementById("raw_data_input").value = ""; 
    document.getElementById("computed_answer").value = "";
}