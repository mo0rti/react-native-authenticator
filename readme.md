## Explanation
Two implement a two factor authentication you can use several ways. One of them is a <a href="https://en.wikipedia.org/wiki/One-time_password/">one time passoword</a>.
One time password based on two types:
- <a href="https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm">TOTP</a>
- <a href="https://en.wikipedia.org/wiki/HMAC-based_One-time_Password_algorithm">HOTP</a>


This is a react native application which demonstrates similar functionality same as <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en">Google Authentiocator</a>


In this application, also you can find a OAuth authentication flow. The idea behind this is that user authenticates by an authentication server and secret key could return in a claim to the application and automatically user redirects to OTP screen.
It's under implementation.


### Installation


- Run **`npm i`**.
- To setup the crypto libraries run this command
**`./node_modules/.bin/rn-nodeify --hack --install`**

### Run
  - android: **`react-native run-android`**


### Config
you can find all the application configs in **`src/lib/settings`**.
##### options 
```
  options: {
      name: 'whatever you like',
      keySize: 32,	// secret key is 32 characters long
      codeLength: 6, // authentication code is 6 digits long
      epoch: 0,
      timeSlice: 60	// each code is valid for 60 seconds
    }
```


