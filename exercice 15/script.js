/* 
    Documentation : https://fr.javascript.info/

    Les notions abordées dans cet exercice sont expliquées ici : 
    . https://fr.javascript.info/array

    Objectifs : 

        . Découvrir les taleaux
*/

/*
    Un tableau peut contenir tout type de données. On peut même y mélanger différents type de données (string, number, object...)
    
    Pour réaliser cet exxercice, vous disposez d'une fonction renderOneCat à qui l'on peut transmettre un objet contenant
    deux propriétés : name, un nom de chat ; picture, l'emplacement de l'image d'un chat.
    renderOneCat ce chargera de faire apparaître ces informations dans la page web.

    Suivez les indications et complétez le code demandé.


*/

// cats est un tableau contenant 3 objets. Chaque objet décrit un chat via une propriété name et une propriété picture.
let cats = [
    {
        name: "Pelote",
        picture : "asset/selfie-pelote.jpg"
    },

    {
        name: "Félix",
        picture : "asset/selfie-felix.jpg"
    },

    {
        name: "Microcéphale",
        picture : "asset/selfie-microcephale.jpg"
    }

];

// En faisant 3 fois appels à la fonction renderOneCat, faites apparaître les 3 chats dans la page web
// ???

// Imaginons à présent que cats contiennent non pas 3 chats, mais 1 245 679 chats.
// A l'aide d'une boucle, donnez un code qui affichera tous les chats dans cats, indépendamment de leur nombre
// ???


class Course{
    _id;
    #week;
    _semestre;
    _parcours;
    _codePN;
    _name;
    _cadre;
    _intervenant;
    _type;
    _groupes;
    _length;
    _isSAE;
    _salles;
    _forceSchedule;
    _groupTags;
  
    constructor(week, semestre, parcours, codePN, name, cadre, intervenant, type, groupes, length)
    {
      this._id = 666;
      this.#week = week;
      this._semestre = semestre;
      this._parcours = parcours;
      this._codePN = codePN;
      this._name = name;
      this._cadre = cadre;
      this._intervenant = intervenant;
      this._type = type;
      this._groupes = groupes;
      this._length = length;
  
      this._isSAE = this._cadre.charAt(0) == 'S';
      this._salles = undefined;
      this._forceSchedule = undefined;
      this._groupTags = undefined;
    }
  
    get weekz(){ return this.#week }
  }

  let cours = new Course(12, 2, "DWeb", "R1.12", "Développement Web", "Ressource", "MORA Frédéric", "TD", "G1, G2", 1.5)
