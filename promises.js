// Promises
// Are a way to manage async without passing billions of 
// callback functions around or nesting them to no end.
// I.e. this....
// connection.query(query1, (results1)=>{
// 	connection.query(query2, (results2)=>{
// 		connection.query(query3, (results3)=>{
// 			connection.query(query4, (results4)=>{

// 			});
// 		});
// 	});
// });

// connection.query(query1){
// 	// do some stuff
// 	// call function I got from earlier and pass it what I just got from results
// 	// call function I got from earlier and pass it this result
// 	// call function I got from earlier and pass it.....
// }


function successCallback(result){
	console.log("Success: " + result)
}

function failureCallback(error){
	console.log("Failed: " + error)
}

function checkName(name,winning,losing){
	if(name == "Rob"){
		winning("Name is Rob.");
	}else{
		losing("Sorry. Not Rob.");
	}
}

// checkName("Rob", successCallback, failureCallback);


// What is a promise?
// Just a JS constructor that gives you a few methonds:
// - all
// - race
// - reject
// - resolve
// - then

// let myFirstPromise = new Promise((resolve,reject)=>{
// 	// resolve and reject are callbacks
// 	// we will run resolve when we are done ith our async studff
// 	// we will run reject if it failed
// 	// setTimeout will stamd in as an AJAX or sql request
// 	setTimeout(function(){
// 		resolve("Success!")
// 	},0);
// });

// console.log(myFirstPromise);
// myFirstPromise.then((successMessage)=>{  // .then specifically listens for when resolve is executed!
// 	console.log(successMessage);
// 	console.log(myFirstPromise);
// })

function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("4 seconds have passed");
		}, 4000);
	});
}

function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("2 seconds have passed");
		}, 2000);
	});
}

var promiseOne = one();
var promiseTwo = two();

// promiseOne.then((successMsg)=>{
// 	console.log(successMsg);
// });
// promiseTwo.then((successMsg)=>{
// 	console.log(successMsg);
// });
var promises = [];
promises.push(promiseOne);
promises.push(promiseTwo);


//All will wait until every promise in the array has resolved.
// It will have an array of each argument passes to each resolve
Promise.all(promises).then((data)=>{
	console.log("All done.");
	console.log(data);
});

Promise.race(promises).then((data)=>{
	console.log("Someone is done.");
	console.log(data);
});



