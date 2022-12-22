# Monte_Carlo-PDDL
Algorithme de planification automatique pour la représentation d'un problème PDDL.
Mathis Ruffieux
M2 IC 
Année 2022-2023


## Manuel d'utilisation 

Il n'y a pas besoin d'installation particulière pour utiliser ce programme.
Ouvrir le fichier index.html et choisir un benchmark puis cliquer sur "Run" afin d'obtenir un plan solution.
Ensuite cliquer sur "Exécuter" pour voir le plan solution s'exécuter dans le terrain.


## Rapport

L'objectif est d'implémenter un planeur pour résoudre des problèmes PDDL en utilisant l'algorithme de Monte Carlo.

Pour celà nous utilisons le principe des "pure random walks". 
Ce projet est encodé en Javascript et fonctionne et est illustré avec un problème PDDL précis expliqué en cours : Le problème de la machine à café.
Les quatre benchmarks à tester sont quatre problèmes pour le domaine pddl de la machine à café (domainCoffee.pddl dans le répertoire pddl).
Ce domaine est représenté en JS avec des modèles Block, Person et Terrain de la même manière que l'encodage PDDL. 

Par exemple chaque blocs peuvent ont les prédicats suivants : 
- isWall
- isPerson
- isCoffee
- isEmpty

Et les actions a effectuées sont :
- movetop
- movebottom
- moveleft
- moveright

### Explications du problème à résoudre 
On est à l'étage d'un bâtiment et on cherche à se déplacer d'un point jusqu'à la machine à café. 

Sur le terrain, la machine à café est en vert, et une personne en bleu.

Pour celà, on envoie N étudiants se déplacer aléatoirement de K pas (profondeur), puis avec une fonction heuristique on trouve l'étudiant s'étant le plus approché de l'objectif (ici de la machine à café) et on réalise son premier pas. Ensuite on réitère l'opération. 

### Explications du programme
Dans le fichier main.js sont écrites les variables utiles à l'algorithme. Par exemple :
- nbPeresonnes : Le nombre N d'étudiants 
- nbPas : profondeur K de la simulation 

L'algorithme de recherche se trouve dans le fichier monteCarlo.js.
Pour chaque action a prédire (chaque pas), il effectue N simulations dans N copies de terrains avec K profondeur. 
Dans une simulation, une personne ne se déplace plus lorsqu'elle arrive dans un dead-end. De plus, une personne ne peut pas repasser deux fois par la même case. 

La fonction heuristique est dans la classe Terrain, elle renvoie la distance d'une personne par rapport à l'objectif. 
Afin de l'optimiser, cet heuristique est mis à jour après chaque déplacement dans chaque simulation. C'est à dire que l'heuristique final d'une simulation est la distance minimale à laquelle est passée une personne de la machine à café, même si elle s'en est éloignée ensuite.

Le nbPas est automatiquement initialisé à (largeur + hauteur)/2, ce qui est une valeur optimale pour ce problème. Car si le nombre de pas est trop faible, la fonction heuristique renverra des "minimum locaux" et pour en sortir en fonction des terrains il faut faire suffisamment de pas. 
A l'inverse, si la profondeur est trop grande alors son exécution sera plus longue et le plan solution sera moins optimal car des actions "inutiles" seront effectuées, il faut donc trouver un compromis.


## Résultats

Temps moyens d'exécution (fonction monteCarlo en js) : 
- benchmark 1 : entre 19ms et 35ms
- benchmark 2 : entre 16ms et 41ms
- benchmark 3 : entre 35ms et 60ms
- benchmark 4 : entre 60ms et 120ms

Temps moyens d'exécution de pddl (Fast Forward) : 
- map 1 : 130ms
- map 3 : 150ms


Note : Je n'ai pas réussi à créer les fichiers PDDL correspondants aux même benchmarks que ceux du programme, car il y a trop de cases sur le terrain. Par exemple, le fichier test1.pddl correspond au premier benchmark, mais ne fonctionne pas (la syntaxe du fichier PDDL n'accepte pas un terrain trop grand). A la place, nous avons deux maps plus petites reprises du projet Sokoban afin de comparer leur temps d'exécution.


## Conclusion

On observe que le programme javascript utilisant "pure random walks" est bien plus rapide pour trouver un plan solution malgré son implémentation sur des terrains trois à quatre fois plus grands.
Ceci s'explique par le fait que le PDDL passe beaucoup de temps à encoder le fichier avant de chercher un plan solution. 
Par exemple pour la map 3, 110 ms sont consacrés à l'encodage du fichier pour seulement 10 ms à trouver un plan solution.
