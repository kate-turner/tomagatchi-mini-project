
class Tomagatchi {
	constructor(name){
		this.name = name;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 1;
	}
	eat(){
		if(this.hunger > 1){
		this.hunger -=1;
		}
	}
	sleep(){
		if(this.sleepiness > 1){
			this.sleepiness -=1;
		}
	}
	play(){
		if(this.boredom > 1){
			this.boredom -=1;
		}
	}
	age(){
		
	}
};

let meme = new Tomagatchi("Meme");
// meme.hunger = 10;
// meme.eat();
// meme.eat();
// console.log(meme.hunger);
// meme.sleepiness = 10;
// meme.sleep();
// meme.sleep();
// console.log(meme.sleepiness);
// meme.boredom = 10;
// meme.play();
// meme.play();
// console.log(meme.boredom);


let seconds = 1; 
const timePassing = () => {
	console.log(`It has been ${seconds} seconds`)
	seconds++;
	meme.hunger++;
	meme.boredom++;
	meme.sleepiness++;
	console.log(`sleepiness: ${meme.sleepiness}`)
	if(meme.hunger > 9 || meme.boredom > 9 || meme.sleepiness > 9){
		console.log("funeral")
		clearInterval(timePasses);
	}
};

const timePasses = setInterval(timePassing, 3000);




// $('#submit').on('click', () => {


// 		console.log('click')
// 		console.log($('#character').val());
// 		const name = ($('#character').val());

// 		$('body').append(`Your name is ${name}`);

// 	});




// setInterval(function() { // interval example
// 	this.ageLevel +1;
// }, 60 * 1000);

// setInterval(function();







