/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/while-for#la-boucle-for



    Objectifs : 

        . Découvrir les instructions de répétition
*/

/*
    Première instruction de répétition : la boucle for

    Les algorithmes et programmes sont là pour nous soulager des tâches rébarbatives et répétitives.
    Et pour ce, il est important de savoir dire à la machine de répéter des instructions un certain nombre de fois.
    
    Une première solution est la boucle for.
    
    Elle permet d'ordonner la répétition d'un bloc d'instructions délimité par une accolade ouvrante et fermante ( {...} ).
    La syntaxe à RESPECTER est la suivante :

    for (let i=debut; i<fin; i++){
        // instructions à répéter
    }

    On appelle la variable i une variable de boucle. On la nomme souvent i par défaut mais rien n'empêche de la nommer autrement.
    i sert à compter le nombre de répétitions (le nombre de boucles)
    i=debut définit à partir de quelle valeur on compte
    i<fin définit jusqu'à combien on compte
    i++ indique que la valeur de i augmente automatiquement de 1 après chaque répétition
    Lorsque i<fin devient faux (false), la machine cesse de répéter le bloc du for et poursuit l'exécution du reste du programme.

    Objectif : A l'aide d'une boucle for, modifier le code ci-dessous pour afficher 47 fois le message "Hello World !" dans la page.

    Note : writeInDocument est une fonction qui affiche dans la page la chaîne de caractères données en paramètre
*/


writeInDocument("Hello World !");