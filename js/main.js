/* Ruffieux Mathis 
 * M2 IC
 * Projet solveur PDDL pour le problème de la machine a café
 */

//Variables globales
var sleepDuration = 300;
var temps_execution = 0; //chronometre du temps d'execution
var tempsMax = 1000; //stop l'execution si on depasse ce temps en ms
var planSolution = []; //a remplir au fur et a mesure
var simulations = []; //contient des terrains avec des personnes

var nbPersonnes = 100; //nombre de personnes de la simulation
var nbPas; //nombre de pas initial par personne (= profondeur de la simulation)
var numeroTerrain;
var T;


/* Fonction de test pour exécuter l'algorithme en le visualisant
 * en même temps 
 */
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


/* Lis un plan solution et l'exécute pour le visualiser 
 */
async function readPlanSolution(){
	//re-initialise le terrain
	T = new Terrain(numeroTerrain);
	T.person.name = 'God';

	for(let i=0;i<planSolution.length;i++){
		T.person.direction = planSolution[i];
		T.avance();
		refreshTerrain();
		await sleep(sleepDuration);
	}
}


/* Sleep function
 * use : await sleep(<duration>);
*/
const sleep = ms => new Promise(r => setTimeout(r, ms));


/* random int function entre 0 et max-1
*/
function getRandomInt(max) {
  	return Math.floor(Math.random() * max);
}



