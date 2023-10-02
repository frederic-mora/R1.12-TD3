/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/array

    Objectifs : 

        . Découvrir les taleaux
*/


/*
    Premier tableau

    Un tableau est un type de données dit structuré. C'est à dire qu'on peut y ranger plusieurs valeurs.
    A la différence d'un objet (qui permet aussi cela), les éléments d'un tableau sont ordonnés, de la 
    première à la dernière case.

    Suivez les indications ci-après et complétez le code chaque fois que demandé.
*/


// tab est tableau, repérable à [...]. Les éléments d'un tableau sont séparés par des virgules
// la taille d'un tableau (le nombre d'éléments contenus) est accessible via l'instruction tab.length
// Chaque 'case' d'un tableau possède un indice.
// L'indice de la première case est 0, la seconde 1, la troisième 2, ... , la dernière tab.length-1.
// Pour lire la valeur à la case d'indice x, on écrit tab[x].
// Pour modifier la valeur à la case d'indice x, on écrit tab[x] = newValue; (newValue est une nouvelle valeur quelconque).
let tab = [5, 3, 12, 97, 35, 28, 31, 56];

// Affichez à l'aide de writeInDocument, la taille de tab
// ???

// Affichez à l'aide de writeInDocument la valeur de la quatrième case de tab
// ???

// Remplacer le nombre 35 par le nombre 53
// ???

// A l'aide d'une boucle, parcourir tab pour afficher toutes les valeurs qu'il contient
// ???

// A l'aide d'une boucle, comptez combien de nombre sont pairs dans tab et afficher le résultat dans la page
let nbEven = 0; // pour compter le nombre d'éléments pairs
// ???

/*
    Javascript possède plusieurs "raccourcis d'écriture" pour écrire des boucles, notamment lorsqu'on a 
    pas forcément besoin d'utiliser l'indice de la boucle.
    Regardez ici : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    Et essayez de refaire la même question que précédemment à l'aide de la syntaxe for...of
*/

// ???