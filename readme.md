#### Requirement : 
```
NodeJS 
java 
Appium server 
Appium desktop  
Genymotion/ Android Studio (optional) 
```

#### How to setup: 
```
Clone the Repository :  
https://github.com/harryosmar/apium-webdriver-io.git
Npm i (install the node modules and package-lock) 
Create .env `cp env.sample .env` 
``` 

#### How to run via genymotion : 
```
Turn on the emulator 
Type Adb devices in terminal to get udid 
Copy to .env  
``` 

#### How to run scenario : 
```
Npm run test @tags for specific tags 
Npm run test for run all scenario 
``` 

#### How to use Appium Desktop : 
```
Run the appium desktop 
Start server 
Start inspection session 
Edit raw json 
Input this json 

 { 
    "platformName": "Android", 
    "deviceName": "udid", 
    "app": "/home/username/Desktop/kompasid.apk" 
} 

Start Session 
``` 
