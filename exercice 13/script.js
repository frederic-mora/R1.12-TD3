/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/while-for#la-boucle-while

    Objectifs : 

        . Découvrir les instructions de répétition
*/

/*
    La boucle while

    La boucle for n'est pas utilisable dans tous les cas. En effet, pour en écrire une, il faut connaître au préalable le
    nombre de répétitions à exécuter. C'est une information que vous n'aurez pas toujours, notamment lorsqu'elle dépend des actions
    de l'utilisateur, imprévisible par nature.

    C'est pour cela qu'il existe un autre type de boucle : la boucle while 
    En substance, il s'agit d'ordonner à la machine : répète ces instructions tant que telle condition est vraie (true).
    Evidemment, il faudra être certain qu'à un moment ou à un autre, la condition en question devienne fausse (false). Sinon
    vous vous exposez à ce qu'on appelle "une boucle infinie", synonyme de plantage.

    La syntaxe à RESPECTER est la suivante :

    while (condition){
        // instructions à répéter
    }

    Ici 'condition' doit être une expression booléenne, c'est à dire une expression qui vaut true ou false.
    A chaque répétition, la machine va ré-évaluer 'condition'. 
    Si elle l'évalue à true, le bloc du while est exécuté et on recommence.
    Si elle l'évalue à false, le bloc du while n'est pas exécuté et la machine passe à la suite du programme.


    Objectif : 

    Modifier le code ci-dessous de sorte à dessiner des carrés de tailles comprises entre 13 et 150 pixels de côté,
    Le premier carré aura une taille de size.start
    Et on augmentera aléatoirement la taille de chaque nouveau carré de 3 à 10 pixels.
    Vous stopperez de dessiner des carrés dès que leur taille dépassera size.end
*/


let size = {
    start: 10,
    end: 150
}

let currentSize = getRandomSize(); // procure/retourne un nombre entre 3 et 10

// dessine dans la page un carré de taille aléatoire, comprise entre 3 et 10 pixels de côté
drawRandomSquareOfSize(currentSize);

// ???
