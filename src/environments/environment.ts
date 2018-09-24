// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDPK_LOy1WYN-CHP0r5Ff0X_C9W1I3wiB0",
    authDomain: "exerciceangular.firebaseapp.com",
    databaseURL: "https://exerciceangular.firebaseio.com",
    projectId: "exerciceangular",
    storageBucket: "exerciceangular.appspot.com",
    messagingSenderId: "992710544421"
  }
};
