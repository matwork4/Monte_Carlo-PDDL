
/* Représente un bloc du terrain
 * isWall : mur
 * isPerson : personne
 * isCoffee : machine à café
 * isEmpty : case libre
 * isVisited : est déjà passé par là 
 */


class Block{


	constructor(idBlock){

		this.isWall = false;
		this.isPerson = false;
		this.isCoffee = false;
		this.isEmpty = true;
		this.isVisited = false;
		
		this.id = idBlock;
		
	}

	setCoffee(){
		if(this.isEmpty){
			this.isEmpty = false;
			this.isCoffee = true;
		}else{
			console.log("Erreur : setCoffee not empty")
		}
	}

	setWall(){
		if(this.isEmpty){
			this.isEmpty = false;
			this.isWall = true;
		}else{
			console.log("Erreur : setWall not empty")
		}
	}

	setPerson(){
		if(this.isEmpty){
			this.isEmpty = false;
			this.isPerson = true;
			this.isVisited = true;
		}else if(this.isCoffee){
			this.isPerson = true;
			console.log("Person est sur Coffee !")
		}else{
			console.log("Erreur : setPerson not empty")
		}
	}





}







