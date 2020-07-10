# client-app

## How to start app

  ### React native
  - install react native globally `npm install –g react-native-cli`
  - recommended to have `node` and `watchman` installed
  ```
    brew install node
    brew install watchman  
  ```
  If you have already installed Node on your system, make sure it is Node `8.3` or newer.

  Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

  ### run on Ios
  - `yarn`
  - `npx pod-install ios`
  - `yarn ios`

   - Need xcode and ios simulator ( mac only )
  
  ### Android

  `yarn android`

  - Simulator:
    Requirements:
      - Android studio
      - Any Android simulator installed

  - Android Device
    - settings > about > tap 10 times on build mode (unlocks developper mode)
    - system > developper options > debbugger USB

# .env
 add .env file with

API_KEY={api_key}
MAP_KEY={map_key}

### How to get mapbox api_key

go to https://www.mapbox.com/
create an account > go to account > create token


# Deploy

## Android

1. In android/app/build.gradle (Module: app) in defaultConfig object increment versionCode and versionName only.
2. After build version is changed you need to sync build.gradle file with project:
  - go to File > Sync Project with Gradle Files
  - Go to Build > Rebuild Project
3. Check that Run Settings have the device set up
4. OPTIONAL step if default run options don’t work for an odd reason. In the Run configuration make sure to :
  - Set Activity to com.clientApp.MainActivity
  - Target a USB Device or Emulator
  - In ‘Before launch’ section set Gradle-aware Make as the first setting before any other
5. in your emulator/physical USB device make sure any old app version are uninstalled/deleted as this often produces conflicts when building new version on the device
6. to rebuild, first, start rebuilding the JSX part (react-native code).
  - Make sure the following command opens a terminal process window (and previous terminal processes are closed ). From project root, in your terminal run ‘react-    native run-android --variant=release’.
  *Variant=release notes production setting. you can change those to ‘-- variant=debug’
  - if successful to 100%, this generates app-release.apk file, you can find it at android/app/build/outputs/apk/release/apk-release
*potential source of confusion: android studio build generates a different app-release.apk file and stores it in a different location, make sure you find the right one :)
7. now go to play.google.com/apps/publish console, press CREATE APPLICATION, or ‘Manage’ existing application to update
8. go to Release management > App releases > Alpha or Beta or Production section, press `create release/edit release`.
9. Upload the app-release.apk from the correct folder (react-native generates one, android studio generates one as well, but in a different locations, see step 6)
choose Alpha, Beta or Production sections. You can always ‘upgrade’ alpha into Beta, into Production.
10. give reason for release of new version description between the <en-GB> </en-GB> tags at the bottom of page
11. ‘Save’ and then ‘Review’ .
12. Fill out store presence, copyright and other tabs with grey circles untill the sections reach publishable (green circle) status.

## Apple

1. Remove localhost from info.plist
  - First we need to remove the localhost exception from info.plist. By default all traffic over HTTP is rejected since iOS 9 with App Transport Security. React Native has added an exception to localhost to make development easier.
 - Open info.plist and expand the App Transport Security settings and Exception Domains. Under there you’ll find the localhost entry. Remove it.
2. Create a release scheme
  - When building an app for release the React Native Developer Menu will be disabled.
3. Build app with release scheme
  - Select Product -> Build from XCODE or build the app from the command line using this command:
  `react-native run-ios --configuration Release`

