
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
	









}



