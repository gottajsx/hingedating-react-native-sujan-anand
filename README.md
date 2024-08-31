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