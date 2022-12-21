/* Ruffieux Mathis 
 * M2 IC
 * Projet solveur PDDL de problème de machine a café
 *
 */


var run = true;
var sleepDuration = 500;
var planSolution = [];
var simulations = []; //contient des terrains avec des personnes

var nbPersonnes = 20; //nombre de personnes de la simulation
var nbPas = 20; //nombre de pas par personne
var numeroTerrain = 1;

var T = new Terrain(numeroTerrain);
T.person.name = 'God';

displayTerrain(T.dimX,T.dimY);

//var val = heuristique(T.person,T);


/*
initSimulations();
runSimulations();
*/



async function testAvance(){
	T.choixDirectionRandom();
	while(T.person.isAlive){
		T.avance();
		refreshTerrain();
		T.choixDirectionRandom();
		await sleep(sleepDuration);
	}
}

async function testMonteCarlo(){
	while(T.heuristique()>1){
		initSimulations();
		let nextStep = runSimulations();
		planSolution.push(nextStep);
		T.person.direction = nextStep;
		T.avance();
		refreshTerrain();
		await sleep(sleepDuration);
	}
}

/* ajout reduction des doublons (allé retour N-S) dans le plan solution, 
 * et le jouer apres en reinitialisant T
*/







/* Sleep function
 * use : await sleep(<duration>);
*/
const sleep = ms => new Promise(r => setTimeout(r, ms));


/* random int function entre 0 et max-1
*/
function getRandomInt(max) {
  	return Math.floor(Math.random() * max);
}



