/* Fonctions qui modifient le DOM html
*/


hideRun();
hideTemps();
hidePlan();
hideJouer();
displayTerrain(0,0);

function hideRun(){
	var elem = document.getElementById("btn_run");
	elem.style.visibility = "hidden";
}
function afficheRun(){
	var elem = document.getElementById("btn_run");
	elem.style.visibility = "";
}
function hideTemps(){
	var elem = document.getElementById("temps");
	elem.style.visibility = "hidden";
}
function afficheTemps(){
	var elem = document.getElementById("temps");
	elem.style.visibility = "";
}
function hidePlan(){
	var elem = document.getElementById("plan");
	elem.style.visibility = "hidden";
}
function affichePlan(){
	var elem = document.getElementById("plan");
	elem.style.visibility = "";
}
function hideJouer(){
	var elem = document.getElementById("btn_jouer");
	elem.style.visibility = "hidden";
}
function afficheJouer(){
	var elem = document.getElementById("btn_jouer");
	elem.style.visibility = "";
}



function displayTerrain(dimX,dimY){
	let terrain = document.createElement("table");
	terrain.setAttribute('id',"childTerrain");

		for(let i=0; i<dimY-1; i++){
			let ligne = document.createElement("tr");
			for(let j=0; j<dimX-1; j++){
				let col = document.createElement("td");
				//col.innerHTML = "0";

				//console.log("T.tab["+i+"]["+j+"].isWall = "+T.tab[i][j].isWall);
				if(T.tab[i][j].isWall){
					col.setAttribute('class', "wall");
				}else if(T.tab[i][j].isPerson){
					col.setAttribute('class', "person");
				}else if(T.tab[i][j].isCoffee){
					col.setAttribute('class', "coffee");
				}else if(T.tab[i][j].isVisited){
					col.setAttribute('class', "visited");
				}else{
					col.setAttribute('class', "empty");
				}

				col.setAttribute('id', 'block'+T.tab[i][j].id);
				col.setAttribute('onclick','blockFunction('+T.tab[i][j].id+')');

				ligne.appendChild(col);
			}
			terrain.appendChild(ligne);
		}

		document.getElementById("terrain").appendChild(terrain);
}

function deleteTerrain(){
	document.getElementById("childTerrain").remove();
}

function blockFunction(id){
	console.log("block "+id);
}

/* reaffiche le terrain 
 */
function refreshTerrain(){
	deleteTerrain();
	displayTerrain(T.dimX,T.dimY);
}

/* Charge un niveau du jeu
 */
function loadLevel(n){
	numeroTerrain = n;
	T = new Terrain(n);
	T.person.name = 'God';
	refreshTerrain();

	afficheRun();
	hideTemps();
	hidePlan();
	hideJouer();
}

/* exécute l'algorithme de monteCarlo et chronomètre le temps
 * d'exécution, puis affiche le plan solution
 */
function pressRun(){
	hideRun();
	monteCarlo();

	temps.innerHTML = "Temps : "+(temps_execution/1000)+"s";
	/*
	var elem_plan = document.getElementById("temps");
	temps.innerHTML = "Temps : "+(temps_execution/1000)+"s";*/

	plan.innerHTML = ajoutePlan();

	afficheTemps();
	affichePlan();
	afficheJouer();
}

function ajoutePlan(){
	var chaine = "Plan solution : <br/>";
	for(let i=0;i<planSolution.length;i++){
		if(planSolution[i]=="N"){
			chaine+=i+": movetop <br/>";
		}else if(planSolution[i]=="S"){
			chaine+=i+": movebottom <br/>";
		}else if(planSolution[i]=="O"){
			chaine+=i+": moveleft <br/>";
		}else if(planSolution[i]=="E"){
			chaine+=i+": moveright <br/>";
		}else{
			console.log("erreur affiche plan "+i);
		}
	}
	//console.log(chaine);
	return chaine;
}

function pressJouer(){
	hideJouer();
	readPlanSolution();
}

