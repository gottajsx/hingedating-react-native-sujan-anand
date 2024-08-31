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




