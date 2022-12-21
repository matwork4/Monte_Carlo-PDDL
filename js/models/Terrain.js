
class Terrain{

	constructor(numTerrain){

		if(numTerrain == 1){
			this.initT1();
		}else{
			console.log("(Constructeur) Choix du terrain manquant");
		}
		
	}

	initTerrainGlobal(dimX,dimY){
		var tab = [];
		//Permet d'auto incrémenter l'id
		var idBlock = 0;
		for(let i=0;i<dimY;i++){
				tab[i] = [];	
		}
		for(let i=0;i<dimY-1;i++){
			for(let j=0;j<dimX-1;j++){
				idBlock++;
				tab[i][j]= new Block(idBlock);
				//console.log("idBlock = "+idBlock);
				if(j==0 || j==dimX-2 || i==0 || i==dimY-2){
					tab[i][j].setWall();
				}

			}
			//idBlock--;
		}
		this.nbBlocks = idBlock;
		this.tab = tab;
		this.dimX = dimX;
		this.dimY = dimY;
	}

	initPerson(posX,posY){
		this.tab[posY][posX].setPerson();
		this.person = new Person(posX,posY);
	}

	setCoffeeMachine(posX,posY){
		this.tab[posY][posX].setCoffee();
		this.coffeeX = posX;
		this.coffeeY = posY;
	}

	setWall(posX,posY){
		this.tab[posY][posX].setWall();
	}

	initT1(){
		//créer un terrain avec des dimentions 
		this.initTerrainGlobal(20,15);
		this.initPerson(5,2);
		this.setCoffeeMachine(15,10);

		//ajoute des murs
		this.setWall(3,5);
		this.setWall(4,5);
		this.setWall(5,5);
		this.setWall(6,5);
		this.setWall(7,5);
		this.setWall(7,4);
		this.setWall(7,3);
		this.setWall(7,2);
		this.setWall(7,1);
		
	}

	//rentourne un bloc en fonction de son id
	searchBlockById(id){
		for(let i=0;i<this.dimY-1;i++){
			for(let j=0;j<this.dimX-1;j++){
				if(this.tab[i][j].id == id){
					return this.tab[i][j];
				}
			}
		}
	}
	

	//avance la personne d'une case
	avance(){
		//retire la personne de la case précédente
		this.tab[this.person.Y][this.person.X].isPerson = false;
		this.tab[this.person.Y][this.person.X].isEmpty = true;


		if(this.person.direction == 'N'){
			this.person.Y = this.person.Y-1;
		}else if(this.person.direction == 'S'){
			this.person.Y = this.person.Y+1;
		}else if(this.person.direction == 'E'){
			this.person.X = this.person.X+1;
		}else if(this.person.direction == 'O'){
			this.person.X = this.person.X-1;
		}

		//ajoute la personne a la nouvelle case
		this.tab[this.person.Y][this.person.X].isPerson = true;
		this.tab[this.person.Y][this.person.X].isVisited = true;
		this.tab[this.person.Y][this.person.X].isEmpty = false;

		/* Met a jour le meilleur heuristique du jouer
		 * attention au minimum locaux de certains terrains ! 
		 */
		let h = this.heuristique();
		if(h < this.person.heuristique){
			this.person.heuristique = h;
			//console.log("new heuristique : "+h);
		}

		//meurt si elle eccède le nombre de pas 
		this.person.nbPas++;
		if(this.person.nbPas > nbPas){
			this.person.die();
		}
		
	}


	/* choisit une direction de la personne aléatoire parmi les
	 * cases disponibles et non visitées autour d'elle
	 */
	choixDirectionRandom(){
		//liste des possibilités
		var possib = [];

		if(this.tab[this.person.Y-1][this.person.X].isEmpty && this.tab[this.person.Y-1][this.person.X].isVisited == false){
			possib.push('N');
		}
		if(this.tab[this.person.Y+1][this.person.X].isEmpty && this.tab[this.person.Y+1][this.person.X].isVisited == false){
			possib.push('S');
		}
		if(this.tab[this.person.Y][this.person.X+1].isEmpty && this.tab[this.person.Y][this.person.X+1].isVisited == false){
			possib.push('E');
		}
		if(this.tab[this.person.Y][this.person.X-1].isEmpty && this.tab[this.person.Y][this.person.X-1].isVisited == false){
			possib.push('O');
		}

		if(possib.length == 0){
			this.person.die();
		}else{
			var randomIndice = getRandomInt(possib.length);
			this.person.direction = possib[randomIndice];
			return possib[randomIndice];
		}
	}




	/* Renvoie la distance en nombre de cases
 	 * d'une position par rapport
 	 * à la cible (machine à café)
	 * P : personne (aux coordonnées X Y)
	 * T : un terrain avec une machine a café
 	 */
	heuristique(){
		let val = Math.abs(this.person.X - this.coffeeX) + Math.abs(this.person.Y - this.coffeeY);
		//console.log("val = "+val);
		return val;
	}






}



