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
