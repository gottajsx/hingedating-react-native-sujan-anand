## Project Creation

```
npx react-native@latest init hingedating-SujanAnand

proceed y
```

## React Native Vector Icons

Install yarn
```
npm install -g yarn
```

Install package:
```
yarn add react-native-vector-icons
```

See https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#android-setup for setup.
To make font management smoother on Android, use this method:

* Edit `android/app/build.gradle` (NOT `android/build.gradle`) and add:
    ```
    apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
    ```

* To customize the fonts being copied, use:
    ```
    project.ext.vectoricons = [
        iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Specify font files
    ]

    apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
    ```

## Backend

```
mkdir api
cd api
npm init
```

Start the backend with:
```
yarn start
```


## Snippets

ES7 + React/Redux/React-Native Snippets
```
rnfes
```

## Geo-position
```
fetch(
          https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDJqEKwV49K0ycxK_os6f9ZgKuv6pJHINA,
        )
```
*key*: Ce paramètre représente la clé API nécessaire pour authentifier la requête auprès de Google. Cette clé est fournie par Google lorsqu'un utilisateur s'inscrit à leur service d'API.

See link: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=fr ("google api key maps" on google)

## NOTES FROM GTPs

Pour obtenir une clé d'API Google Maps, voici les étapes à suivre :

### Étape 1 : Créer un compte Google Cloud
Si tu n'as pas encore de compte Google Cloud, tu dois en créer un [ici](https://cloud.google.com/).

1. Accède à la [Google Cloud Console](https://console.cloud.google.com/).
2. Connecte-toi avec ton compte Google.

### Étape 2 : Créer un projet
1. Une fois connecté à la console, clique sur le menu déroulant à côté du nom de projet actuel (ou sur **Sélectionner un projet** si tu n'en as pas).
2. Clique sur **Nouveau Projet** pour en créer un.
3. Donne un nom à ton projet, puis clique sur **Créer**.

### Étape 3 : Activer l'API Google Maps
1. Après avoir créé ton projet, accède au menu en haut à gauche (les trois barres) et sélectionne **API et services** > **Bibliothèque**.
2. Recherchez **Google Maps** dans la barre de recherche.
3. Sélectionne **Maps JavaScript API** (ou toute autre API Google Maps que tu veux utiliser, comme **Geocoding API**, **Places API**, etc.).
4. Clique sur **Activer** pour activer l'API dans ton projet.

### Étape 4 : Créer une clé API
1. Toujours dans **API et services**, sélectionne **Identifiants** dans le menu de gauche.
2. Clique sur **Créer des identifiants** et choisis **Clé API**.
3. Une clé API sera générée automatiquement. Tu peux la copier et l'utiliser dans ton application.

### Étape 5 : Restreindre l'utilisation de la clé API (Optionnel mais recommandé)
Pour éviter une utilisation abusive de ta clé API, il est recommandé de la restreindre.

1. Dans la section **Identifiants**, clique sur ta clé API nouvellement créée.
2. Sous **Restrictions d'application**, tu peux restreindre l'utilisation de la clé à certains domaines, adresses IP ou applications Android/iOS spécifiques.
3. Sous **Restrictions d'API**, tu peux limiter la clé à certaines API Google (par exemple, uniquement **Maps JavaScript API**).

### Étape 6 : Configurer la facturation (Obligatoire)
Google Maps Platform requiert une configuration de la facturation pour utiliser les services. Il existe un quota gratuit mensuel, mais tu dois lier une carte de crédit ou un moyen de paiement.

1. Accède à **Facturation** dans le menu de gauche et associe un compte de facturation à ton projet.
2. Assure-toi de bien surveiller l'utilisation des services pour éviter les frais inattendus.

### Étape 7 : Utiliser la clé API
Tu peux maintenant utiliser ta clé API dans tes projets. Par exemple, pour une carte Google Maps dans une page HTML :

```html
<script async
    src="https://maps.googleapis.com/maps/api/js?key=VOTRE_CLE_API&callback=initMap">
</script>
