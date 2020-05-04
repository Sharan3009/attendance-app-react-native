# Setup

### React Native setup

* `npm install -g react-native-cli`
* `react-native init projectName`


### Java setup

* Install `Jdk` (Java development kit). Make sure the version is 8. It will work in version 11 too but in case some issues show up, fixes are easily available for Java 8.
* For `Jdk`, `JAVA_HOME` needs to be setup.
* Search for "environment variables" in windows and hit enter.
* Now click on `Environment Variables` button.
* Under `System Variables` select `New` and add `key` as `JAVA_HOME` and `value` as `C:\Program Files\Java\jdk1.8.0_77`. Make sure that you enter the correct folder name of Java jdk.


### Android Sdk setup.

* Install Android Sdk (This can only be done along with the studio).
* After successful install of Android studio, it's sdk will be at `C:\Users\{username}\AppData\Local\Android\Sdk`. Note `AppData` is a hidden folder, so you may need to enable `Show Hidden Folers` option from windows.
* Check if `tools` folder is available at the Sdk folder. If not then download it from <https://dl.google.com/android/repository/sdk-tools-windows-4333796.zip>. If the link doesnt work, then you can lookup `Only android sdk download` and can look for the zip file.
* Make sure after the download of `tools` folder, the folder has a `bin` folder which itself has `sdkmanager` exe file.
* Put the tools folder in the Sdk directory (directory is mentioned in the previous point).
* For `Sdk`, `ANDROID_SDK_ROOT` needs to be setup.
* Search for "environment variables" in windows and hit enter.
* Now click on `Environment Variables` button.
* Under `System Variables` select `New` and add `key` as `ANDROID_SDK_ROOT` and `value` as `C:\Users\{username}\AppData\Local\Android\Sdk`.


### Android emulator setup

* You need to create emulator for android from Android Studio if you need to work without your phone.
* To create the emulator, open your Android Studio. Go to `Configure` or `tools` which ever is present, and from there go to `AVD Manager`.
* If you see a list of devices in the `AVD Manager` that means you already have a device setup. Otherwise you will have to create one by clicking on `Create Virtual Device`.
* Now Select any device and click `Next`.
* It will ask you to select system image, You can select anyone by clicking on `Download`. If it is already downloaded, you can click on that system image, and `Next` Button will be enabled.
* After clicking `Finish` your device is setup.


### Emulator setup in VS code.

* in order to launch the emulator from VS code, you can download `Android IOS emulator` extension in VS code.
* You will need to set the `emulator` path of the Sdk path in the extension's settings, otherwise it will not work, i.e `C:\Users\{username}\AppData\Local\Android\Sdk\emulator`.
* Once it's setup you can press `ctrl + shift + enter`. Select `Emulator` and hit enter. Then `View Android emulators` and hit enter.
* It will show you your emulators list and select that. This will open and run the emulated device.


### Making build of react-native to check if everything works fine (Android).

* Go to the react-native project directory from terminal. From there `cd android`
* try making the build first, by executing `gradlew assembleRelease`. If everything works fine it means setup is completed. If it throws error related to licensing then you can go to the `tools` folder in `Sdk` and from there run the command `sdkmanager --licenses`. This will accept all the licenses through a process. (This will work for Jdk 8 only, Jdk 11 has removed the modules support and will not work).



### Making build of react-native to check if everything works fine (IOS).
- run the command `react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios`

# Debugging

### Run android device for runtime development.
* Running android will need the windows path to `adb` and `emulator`.
* Search `environment variables` in windows and open it.
* Click on `Environment Variables` option.
* Under `User variables` you will see a variable called `Path`.
* Edit the path value and add two more values i.e `C:\Users\{username}\AppData\Local\Android\Sdk\emulator\` for the emulator and `C:\Users\{username}\AppData\Local\Android\Sdk\platform-tools\` for the adb.
* Once its up and running, run the command from project folder `npm run android` or `react-native run-android`. This will work only if the Path's mentioned are all setup.