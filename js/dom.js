/* Fonctions qui modifient le DOM html
*/

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





