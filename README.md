
# react-native-panoram-image

## Getting started

`$ npm install react-native-panoram-image --save`

### Mostly automatic installation

`$ react-native link react-native-panoram-image`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-panoram-image` and add `RNPanoramImage.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPanoramImage.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNPanoramImagePackage;` to the imports at the top of the file
  - Add `new RNPanoramImagePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-panoram-image'
  	project(':react-native-panoram-image').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-panoram-image/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-panoram-image')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNPanoramImage.sln` in `node_modules/react-native-panoram-image/windows/RNPanoramImage.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Panoram.Image.RNPanoramImage;` to the usings at the top of the file
  - Add `new RNPanoramImagePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNPanoramImage from 'react-native-panoram-image';

// TODO: What to do with the module?
RNPanoramImage;
```
  