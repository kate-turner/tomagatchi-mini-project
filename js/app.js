
class Tomagatchi {
	constructor(name){
		this.name = name;
		this.hunger = 0
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
	}
	eat(){
		if(this.hunger > 0){
		this.hunger -=1;
		}
	}
	sleep(){
		if(this.sleepiness > 0){
			this.sleepiness -=1;
		}
	}
	play(){
		if(this.boredom > 0){
			this.boredom -=1;
		}
	}
	// age(){
		
	// }
};

let meme = new Tomagatchi("Meme");

const ageUp = () => {
	meme.age++;
	console.log(`age: ${meme.age}`);
	if(meme.age > 9) {
		console.log("Your Tomagatchi has died of old age. Blessed be the fruit");
		clearInterval(aging);
	}
	displayStats();
};
const aging = setInterval(ageUp, 10000);



let seconds = 0; 
const timePassing = () => {
	seconds++;
	console.log(`It has been ${seconds} seconds`)
	meme.hunger++;
	console.log(`hunger: ${meme.hunger}`)
	meme.boredom++;
	console.log(`boredom: ${meme.boredom}`)
	meme.sleepiness++;
	console.log(`sleepiness: ${meme.sleepiness}`)
	if(meme.hunger > 9 || meme.boredom > 9 || meme.sleepiness > 9){
		console.log("funeral")
		clearInterval(timePasses);
	}
	displayStats();
};
const timePasses = setInterval(timePassing, 7000);


const displayStats = () => {
	$("span#hunger").text(meme.hunger);
	$("span#sleepiness").text(meme.sleepiness);
	$("span#boredom").text(meme.boredom);
	$("span#age").text(meme.age);
}

$("#food-button").on ('click', () => {
	meme.eat();
	$("span#hunger").text(meme.hunger);
	console.log("thank you for feeding me!");
});

$("#sleep-button").on ('click', () => {
	meme.sleep();
	$("span#sleepiness").text(meme.sleepiness);
	console.log("thank you for turning off the light!");
});

$("#play-button").on ('click', () => {
	meme.play();
	$("span#boredom").text(meme.boredom);
	console.log("thank you for playing with me!");
});





// Clear name after, append to character div in fun text/ change box to green
$('#submit').on('click', () => {
	console.log('click')
	console.log($('#character').val());
	const name = ($('#character').val());
	$('body').append(`Your name is ${name}`);
});









