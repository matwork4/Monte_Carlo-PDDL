


/* Initialise les simulations pour la génération suivante
 */
function initSimulations(){
	simulations = [];

	//copie le terrain actuel dans chaque nouvelle simulation
	for(let i=0;i<nbPersonnes;i++){
		let newT = new Terrain(numeroTerrain);

		newT.initPerson(T.person.X,T.person.Y);
		simulations.push(newT);
	}
}

/* 
 */
function runSimulations(){
	let bestHeuristique = 999;
	let bestStep;
	for(let i=0;i<nbPersonnes;i++){
		let firstStep = simulations[i].choixDirectionRandom();
		while(simulations[i].person.isAlive){
			simulations[i].avance();
			simulations[i].choixDirectionRandom();
		}
		if(simulations[i].person.heuristique < bestHeuristique){
			bestStep = firstStep;
			bestHeuristique = simulations[i].person.heuristique;
		}
	}

	/* On fait moins de pas lors de la prochaine simulation 
	 * si on arrive déjà à l'atteindre
	*/
	if(bestHeuristique == 1){
		nbPas--;
	}

	console.log("bestStep = "+bestStep+", bestHeuristique = "+bestHeuristique);
	return bestStep;
}


/*
function monteCarlo(){
	initSimulations();
	let nextStep = runSimulations();
	simulations.push(nextStep);
}
*/



