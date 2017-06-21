// Callbacks
// In JS, functions are just objects.
// Therefore...you can pass functions around your code.

// =======this============
// $('btn').click(function(){
// 	console.log("Click!")
// });
// // ======is the same as====
// var clickFunction = function(){console.log("Click!")};
// $('btn').click(clickFunction);


// ========somewhere in jQuery, is this...=======
// var $ = {};
// $.click = function(callbackToRunLater){
// 	// stuff happens
// 	callbackToRunLater();
// }


// Consider the following...

// function x(y){
// 	return function(z){
// 		console.log(y+z)
// 	}
// 	// console.log(y)
// }
// x(2)(3)

// // How can you make this work?
// // The only way is if x RETURNS a function.
// // That function will take a parameter
// // Higher Order function = a function that gets passed around

// // =========================
// function print(thingToPrint){
// 	console.log(thingToPrint);
// }

// // The print function doesn't need to be passed around. Because 
// // we have access to it locally. Think BlackJack. Deal was 
// // a utility function, we called it when we needed it.

// function b(number){
// 	let localNum = number * number;
// 	// Call the print function above
// 	print(localNum);
// }

// function c(theString){
// 	let localString = theString + " is what was passed";
// 	print(localString)
// }

// b(2);
// c("Test")

// // Could also make print a protptype of a cinstructor.
// // BUT... what if we didn't have access to the code that needed
// // to run our code? i.e., what if we didn't have access to the

// var a = function(theVar){
// 	console.log(theVar)
// }

// var b = function(number, callback){
// 	let localNum = number * number;
// 	callback(localNum);
// }

// // b(3,function(number){console.log(number)})
// b(3,a)







// findElement([1,3,5,8,9,10], function(num){return num % 2 === 0})
// Return 8

function findElement(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }
    }
}

var find = findElement([1,3,5,8,9,10], function(num) {
    return num % 2 === 0; 

});

console.log(find);




// findElement([1,3,5,9], function(num){reutrn num % 2 === 0})
// Return false

function findElementBool(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            return array[i];
        }else{
        	return false
        }
    }
}

var findBool = findElementBool([1,3,5,9], function(num) {
    return num % 2 === 0; 

});

console.log(findBool);



// findElement(['Jim','Indian','Marsh','Glitch'], function(str){return str.indexOf('itch') !== -1});

function findElementItch(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf('itch') !== -1){
            return array[i];
        }
    }
}

var findItch2 = findElementItch(['Jim','Indian','Marsh','Glitch']);
console.log(findItch2);



function findElementItch2(array,str) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(str) !== -1){
            return array[i];
        }
    }
}


var findItch2 = findElementItch2(['Jim','Indian','Marsh','Glitch'],'itch');
console.log(findItch2);




// =========OR========== FOR ALL THREE

function findElement(array, callback){
    for (i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
    return false
}

// =====================
// =====================
// =====================


var students = ["Rissa", "Merilee", "Chris", "Stephen"];
students.map((student,index)=>{
	console.log(student);
})

/// Array.prototype.map



