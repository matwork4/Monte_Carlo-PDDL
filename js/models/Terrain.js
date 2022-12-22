
class Terrain{

	constructor(numTerrain){

		if(numTerrain == 1){
			this.initT1();
		}else if(numTerrain == 2){
			this.initT2();
		}else if(numTerrain == 3){
			this.initT3();
		}else if(numTerrain == 4){
			this.initT4();
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
		this.setNbPasMax();
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

	initT2(){
		//créer un terrain avec des dimentions 
		this.initTerrainGlobal(20,15);
		this.setNbPasMax();
		this.initPerson(5,2);
		this.setCoffeeMachine(5,10);

		//ajoute des murs
		this.setWall(1,5);
		this.setWall(2,5);
		this.setWall(3,5);
		this.setWall(4,5);
		this.setWall(5,5);
		this.setWall(6,5);
		this.setWall(7,5);
		this.setWall(8,5);
		this.setWall(9,5);
		this.setWall(10,5);
		this.setWall(11,5);
		this.setWall(12,5);
	}

	initT3(){
		//créer un terrain avec des dimentions 
		this.initTerrainGlobal(20,20);
		this.setNbPasMax();
		this.initPerson(7,7);
		this.setCoffeeMachine(11,11);

		//ajoute des murs
		this.setWall(9,3);
		this.setWall(9,4);
		this.setWall(9,5);
		this.setWall(9,6);
		this.setWall(9,7);
		this.setWall(9,8);
		this.setWall(9,9);
		this.setWall(9,10);
		this.setWall(9,11);
		this.setWall(9,12);
		this.setWall(9,13);
		this.setWall(9,14);
		this.setWall(9,15);

		this.setWall(3,9);
		this.setWall(4,9);
		this.setWall(5,9);
		this.setWall(6,9);
		this.setWall(7,9);
		this.setWall(8,9);
		this.setWall(10,9);
		this.setWall(11,9);
		this.setWall(12,9);
		this.setWall(13,9);
		this.setWall(14,9);
		this.setWall(15,9);
	}

	initT4(){
		//créer un terrain avec des dimentions 
		this.initTerrainGlobal(20,20);
		this.setNbPasMax();
		this.initPerson(2,16);
		this.setCoffeeMachine(16,6);

		//ajoute des murs
		this.setWall(3,17);
		this.setWall(3,16);
		this.setWall(3,15);
		this.setWall(3,14);
		
		this.setWall(3,12);
		this.setWall(3,11);
		this.setWall(3,10);

		this.setWall(2,10);
		this.setWall(1,10);
		
		this.setWall(3,8);
		this.setWall(3,7);
		this.setWall(3,6);
		this.setWall(3,5);
		this.setWall(3,4);
		
		this.setWall(3,2);
		this.setWall(3,1);

		this.setWall(4,8);
		this.setWall(5,8);
		this.setWall(6,8);
		this.setWall(7,8);
		this.setWall(8,8);
		this.setWall(9,8);
		this.setWall(10,8);
		this.setWall(11,8);
		this.setWall(12,8);
		this.setWall(13,8);
		this.setWall(14,8);
		this.setWall(15,8);
		this.setWall(16,8);
		this.setWall(17,8);

		this.setWall(4,10);
		this.setWall(5,10);
		this.setWall(6,10);
		this.setWall(7,10);
		this.setWall(8,10);
		this.setWall(9,10);
		this.setWall(10,10);
		this.setWall(11,10);
		this.setWall(12,10);
		this.setWall(13,10);
		this.setWall(14,10);
		this.setWall(15,10);
		this.setWall(16,10);


		
	}

	setNbPasMax(){
		nbPas = parseInt((this.dimX + this.dimY) / 2);
		//console.log("set nbPas : "+nbPas);
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



