

# DOM

#### Introduction à *DOM*

<div class="hide">
Dans cette leçon, les sujets suivants seront abordés :

* `DOM`
* `script`
* `document`
* `document` Selectors
* Element Methods
* Event Handlers

</div>

Le nom `DOM` Il vient de son acronyme anglais « Document Object Model ». Lorsqu'un navigateur charge une page Web, il prend tout le contenu HTML et génère un modèle pour ce contenu. En utilisant le code Javascript, nous pouvons accéder et manipuler ce modèle en ajoutant ou en supprimant des éléments, en modifiant ses attributs et également en modifiant ses styles.

## L'élément *script*
Il est possible d'injecter du code Javascript dans une page HTML à l'aide de l'élément `script`. Pour cela, il existe deux manières différentes de procéder:

1. Insertion de l'étiquette `<script>` dans le `<head>` de la page HTML:

```html
    <html>
        <head>
            <script>
                // C'est là que ira le code Javascript
                alert('Injection de code Javascript');
            </script>
        </head>
    </html>
```

2. Utilisez l'étiquette `<script>` pour injecter du code Javascript contenu dans un fichier externe dans notre page HTML :

```html
    <html>
        <head>
            <script type="text/javascript" src="./index.js" async></script>
        </head>
    </html>
```

*NB: l'attribut `type` doit être placé comme "text/javascript" et dans le `src` L'emplacement du fichier avec le code Javascript que l'on souhaite injecter doit être indiqué. Il est également possible d'inclure le mot `async` à la fin de la balise pour indiquer au navigateur de charger le script de manière asynchrone*

## Document

En exécutant Javascript nous avons la possibilité d'accéder à un objet global appelé `document` qui contient les propriétés du DOM et les méthodes de son prototype qui nous permettent d'accéder aux éléments du DOM et de les manipuler.

>Dans le moteur JS exécuté dans le navigateur, l'objet global est `document`, c est a dire `this` pointer vers `document` quand on l'utilise dans le contexte global.

## Selectors

Lorsque le navigateur analyse le document HTML, il crée une structure arborescente (le DOM), considérons le DOM comme un modèle de la page sous forme d'objets. JavaScript ne sait pas comment travailler avec HTML, mais il sait comment travailler avec des objets. Par conséquent, chaque élément html qui se trouve dans le dom, nous pouvons l'utiliser comme un objet, qui aura ses propriétés et ses méthodes. Dans toutes les méthodes qu'il contient `document` Dans son prototype, les plus utiles sont les **selectores**. Les **selectores** Ils nous permettront de rechercher et de récupérer un élément du DOM. (comme lorsque nous recherchions un élément dans un arbre de recherche), ce n'est que maintenant que l'élément renvoyé est un objet JS qui représente une entité HTML.

Les 5 principaux sélecteurs sont les suivants :

### getElementsByClassName

`document.getElementsByClassName` Il est chargé de rechercher les éléments en fonction de leur nom de classe. Renvoie un tableau contenant les objets correspondant à la recherche et pouvant être itéré. Nous devons fournir en paramètre une chaîne avec le nom de la classe que nous voulons rechercher. Exemple:

```javascript
    const divs = document.getElementsByClassName('divClass');
```
*Dans cet exemple, nous recherchons des éléments qui contiennent 'divClass' comme classe définie*

### getElementById

`document.getElementById` Il est chargé de trouver un seul élément en fonction de son identifiant, il renverra donc ledit élément. Nous devons fournir en paramètre une chaîne avec l'identifiant de l'élément que nous voulons rechercher. Exemple:
```javascript
    const div = document.getElementById('divId');
```

*Dans cet exemple nous recherchons l'élément dont l'identifiant est égal à 'divId'*

## querySelector

`document.querySelector` est une méthode qui recherche des éléments en fonction d'un ou plusieurs sélecteurs CSS. Rappelons qu'il est possible de référencer des classes à l'aide d'un `.`, aux ids avec `#` et aux éléments utilisant directement leur nom de balise. Il est recommandé de n'utiliser que des ids avec `querySelector` puisqu'il ne renverra que le premier élément qui correspond au sélecteur indiqué. Exemple:

```javascript
    const div = document.querySelector('.divId');
```

*Dans cet exemple nous obtiendrons le premier élément avec la classe 'divId' mais s'il y a plus d'éléments avec ladite classe il ne les prendra pas en compte*

### querySelectorAll

`document.querySelectorAll` fonctionne de la même manière que `querySelector` mais au lieu de renvoyer uniquement le premier élément qui correspond au sélecteur, il renverra un tableau avec tous les éléments qui lui correspondent et renvoie un objet de type tableau contenant tous les éléments qui correspondent au sélecteur. Exemple:

```javascript
    const divs = document.querySelectorAll('.divId');
```
*Dans cet exemple nous obtiendrons un tableau avec tous les éléments qui contiennent la classe 'divId'*

### createElement

Dans le cas où nous souhaitons créer un élément à ajouter au `DOM` on peut utiliser`document.createElement`. Cette méthode reçoit en paramètre une chaîne indiquant le type d'élément que l'on souhaite créer et renvoie un élément vide dudit type. Exemple:

```javascript
    const newDiv = document.createElement('div');
```

*Dans cet exemple, nous créons un nouvel élément 'div' vide*

## Element Methods

Une fois l'élément sélectionné, nous pouvons utiliser différentes méthodes et propriétés pour le modifier, comme changer son style, changer les attributs, ajouter/supprimer des éléments imbriqués, ajouter/supprimer `event listeners`. Certaines des méthodes les plus courantes sont :

### .innerHTML

Avec la méthode `innerHTML` Nous pouvons accéder aux informations trouvées entre les balises d'ouverture et de fermeture d'un élément HTML aussi bien pour une simple lecture que pour une modification. Exemple:

```javascript
    const p = document.querySelector('#pId');
    console.log(p.innerHtml) // Il imprimera le texte à l'intérieur du paragraphe avec l'identifiant 'pID'

    p.innerHTML = 'Nouveau texte'; // Nous modifions ici le texte du paragraphe mentionné ci-dessus

    console.log(p.innerHTML); // Il imprimera le nouveau texte que nous avons défini, c'est-à-dire : "Nouveau texte"
```


### .style

On peut modifier le style d'un élément en utilisant `.style`. Il convient de mentionner qu'avec cela, nous n'accédons pas au style CSS mais que nous ajoutons la propriété `style` à l'intérieur de la balise HTML. Exemple:

```javascript
    const div = document.querySelector('#divId');

    div.style.height = '300px'; // On donne une hauteur de 300 pixels au div dont l'identifiant est 'divId'
    div.style.background = 'red'; // Nous définissons la couleur d'arrière-plan sur rouge pour ledit div
```

### .className y .id

On peut utiliser `.className` y `.id` pour accéder et modifier les classes ou identifiants des éléments. Ceci est utile lorsque l'on a déjà un style particulier associé à une classe ou un identifiant défini dans les styles CSS et que l'on souhaite simplement modifier la classe ou l'identifiant de l'élément pour changer son style sans avoir à modifier propriété par propriété. Exemple:

```javascript
    const div = document.querySelector('#divId');

    console.log(div.id); // En utilisant ',id' nous accédons au nom de son identifiant, dans ce cas 'divId'
    div.className = 'newClass'; // Nous définissons la classe 'newClass'
    div.id = 'newId'; // Nous définissons l'id 'newId'
```

### .appendChild

Il est possible d'ajouter des éléments directement au `DOM` en utilisant `.appendChild` à propos de l'élément que nous voulons être son parent. Exemple:

```javascript
    const body = document.querySelector('body');
    const newDiv = document.createElement('div'); //Nous créons un nouvel élément div
    body.appendChild(newDiv); // Nous ajoutons le div nouvellement créé dans le corps de la page

```

## Event Listeners

Un `Event Listener` C'est une fonction qui est exécutée après qu'un certain événement se soit produit. Il existe différents types d'événements, parmi lesquels : un clic, un mouvement de souris sur l'élément, l'appui sur une touche, etc. Pour voir la liste complète, vous pouvez consulter le [link] suivant (https://developer.mozilla.org/es/docs/Web/Events)

### Click

L'événement le plus courant est l'événement 'clic' et en particulier il est le seul à posséder la propriété `.onclick` pour attribuer une fonction qui sera exécutée en cliquant sur le composant indiqué. Exemple:
```javascript
    const div = document.querySelector('#divId');
    div.onclick = function() {
        console.log('cliqué');
    };
```

*Dans cet exemple, nous indiquons que lorsque l'on clique sur le div dont l'identifiant est 'divId', la fonction qui y est définie est exécutée ; la seule chose qu'elle fera dans ce cas est d'écrire "cliqué" dans la console*

### addEventListener et d'autres événements

`.addEventListener` C'est une méthode qui reçoit comme premier paramètre le type d'événement qui sera en attente et comme deuxième paramètre une fonction de rappel, qui est celle qui sera exécutée lorsque ledit événement se produira. Remarque : il est préférable d'utiliser addEventListener dans tous les cas, y compris les clics. Exemple:

```javascript
    const div = document.querySelector('#divId');
    div.addEventListener('mouseenter', function() {
        console.log('La souris est entrée !');
    });
```

*Dans cet exemple, nous indiquons que lorsque la souris entre dans le div dont l'identifiant est 'divId', la fonction qui y est définie est exécutée. La seule chose qu'elle fera dans ce cas est d'écrire dans la console "La souris est entrée ! "*


A) Que signifie l'acronyme DOM?

1. Document Object Model
2. Dynamic Object Model
3. Document Of Model
4. Data Object Model

R- 1

B) Laquelle des affirmations suivantes est vraie concernant le DOM ?

1. Le DOM est une technologie propre à JavaScript.
2. Le DOM représente une structure hiérarchique d'objets qui représente le contenu et la structure d'une page Web.
3. Le DOM ne peut pas être modifié à l'aide de JS.
4. Le DOM est uniquement utilisé pour la conception graphique des pages Web. 

R- 2

C) Quelle est la bonne façon de sélectionner un élément DOM par son ID ?

1. document. getElement ('elementoID)
2. document. selectElement ('elementoID')
3. document. querySelectorAll( '#elementoID')
4. document.getElementById ('elementoID')

R- 4

D) Quelle méthode est utilisée pour ajouter un nouvel élément au DOM en JS ?

1. createElement ()
2. createNode ()
3. addElement ()
4. appendElement ()

R- 1

E)
Laquelle des méthodes suivantes est utilisée pour ajouter un événement à un élément DOM dans JS ?

1. attachEvent()
2. eventListener()
3. addEvent ()
4. addEventListener()

R- 4

F) Quel événement est déclenché lorsqu'un utilisateur clique sur un élément HTML ?

1. clickEvent
2. mouseClick 
3. click
4. mouseUp

R- 1

G) Quelle propriété est utilisée pour accéder à la valeur d'un champ de saisie de texte en JS ?

1. textValue 
2. value
3. inputValue 
4. textContent

R- 2

H) Quelle est la bonne façon de sélectionner tous les éléments avec la classe « ma classe » dans JS ?

1. document.querySelectorAll('.ma-clase')
2. document.getElementsByClass ('ma-clase')
3. document.select (*ma-clase')
4. document.getElementByClass (*ma-clase')

R- 1

I) Laquelle de ces propriétés nous permet de modifier le contenu d'un élément ?

1. innerHTML
2. innerText 
3. textContent 
4. value

R- 1

J) Laquelle des méthodes suivantes est utilisée pour ajouter un nouvel élément en tant qu'enfant d'un autre ?

1. appendChild ()
2. append ()
3. insertChild()
4. createChild()

R- 1