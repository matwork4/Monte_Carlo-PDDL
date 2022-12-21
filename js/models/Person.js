
/* 
 * directions : 
 * N : nord
 * S : sud
 * E : est
 * O : ouest
 * 
 */

//Nom aléatoire
const namesList = ['Farid','Laure','Juliette','Nereis','Tom','Clement','Bastien','Celia','Zhenyu','Moustafa','Anouar','Dimitri','Mathis','Marine','Nicolas','Etienne','Salwa'];


class Person{

	constructor(posX,posY){
		this.X = posX;
		this.Y = posY;
		this.direction = 'N';
        this.isAlive = true;
        this.nbPas = 0;
        this.heuristique = 999; // on cherche a le minimiser
        this.name = namesList[getRandomInt(namesList.length)];
	}

    /* Une personne "meurt" lorsqu'elle est dans un cul de sac (dead-end)
     * ou qu'elle arrive au bout de son nombre de pas,
     * elle ne peut alors plus avancer.
     */
    die(){
        //God est le seul qui n'est pas une simulation, il ne peut donc pas mourir
        if(this.name != 'God'){
            this.isAlive = false;
            //console.log("rip "+this.name+", distance : "+this.heuristique);
        }
    }

}









