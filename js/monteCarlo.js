/* Mathis Ruffieux
 * M2 IC
 */

/* Initialise les simulations pour la génération suivante
 */
function initSimulations(){
	simulations = [];

	//copie le terrain actuel dans chaque nouvelle simulation
	for(let i=0;i<nbPersonnes;i++){
		let newT = new Terrain(numeroTerrain);

		//copy les isVisited du terrain originel
		for(let i=0; i<newT.dimY-1; i++){
			for(let j=0; j<newT.dimX-1; j++){
				newT.tab[i][j].isVisited = T.tab[i][j].isVisited;
			}
		}

		newT.initPerson(T.person.X,T.person.Y);
		simulations.push(newT);
	}
}

/* Run toutes les simulations d'une etape, puis renvoie la 
 * première étape de la meilleure simulation en fonction
 * de l'heuristique
 */
function runSimulations(){
	let bestHeuristique = 999; //a minimiser
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
		//console.log("nbPas : "+nbPas);
	}

	//console.log("bestStep = "+bestStep+", bestHeuristique = "+bestHeuristique);
	return bestStep;
}

/* Algorithme de Monte Carlo comme expliqué en cours :
 * C'est à dire qu'on tire n personnes, chaque personne réalise k actions
 * aléatoires et on ne garde que la première action (ici le premier déplacement)
 * de la personne s'étant approché au plus proche de l'objectif.
 */
function monteCarlo(){
	let chrono = parseInt(Date.now()); //chronomètre son exécution
	let tps = 0;
	let planNonTrouve = false;
	planSolution = [];
	while(T.heuristique()>1 && !planNonTrouve){
		initSimulations();
		let nextStep = runSimulations();
		planSolution.push(nextStep);
		T.person.direction = nextStep;
		T.avance();
		tps = parseInt(Date.now())-chrono;
		if(tps>tempsMax){
			planNonTrouve = true;
		}
	}

	//si pas de plan trouve au bout de 1s on relance tout
	if(planNonTrouve){
		console.log("reload planNonTrouve");
		T = new Terrain(numeroTerrain);
		T.person.name = 'God';
		monteCarlo();
	}else{
		temps_execution = tps;
	}

}



