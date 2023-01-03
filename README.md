# Amazon Clone
This projects mimics the e-commerce website Amazon.commerce
Bundled with login and sign up functionality frontend of the 
project includes tons of items listed in the home page that 
can be added to cart, When navigated to the basket those items
 will be displayed which can be removed from the basket as well.
There is a proceed to checkout button on the basket page which 
will redirect you to the checkout page.
In the checkout page where stripe payment is used to process a 
card payment, After entering the card details you will have three 
buttons "Buy Now", "Click to Confirm", "Proceed to Confirmation Page".



## Dependencies

Dependencies used in the project are as follows

[![Node.js](https://img.shields.io/badge/Dependency-Node.js-red)](https://nodejs.org/en/)

![React.js](https://img.shields.io/badge/Library-React.js-blue)

[![AGPL License](https://img.shields.io/badge/Backend-Firebase-lightgrey)](http://www.firebase.com)

[![AGPL License](https://img.shields.io/badge/dependency-Javascript-orange)](http://www.javascript.com)

[![AGPL License](https://img.shields.io/badge/UI-Material--UI-yellowgreen)](http://www.materialui.com)


## Demo

https://clone-51f92.web.app

### Home Page -

![Screenshot (56)](https://user-images.githubusercontent.com/64829176/210304161-f8042878-a015-4107-9135-12d01b03192b.png)


### Check Out Page -

![Screenshot (58)](https://user-images.githubusercontent.com/64829176/210304180-379afff2-becd-4dd5-aacf-2ee7f443780c.png)


### Login/Signup Page - 

![Screenshot (57)](https://user-images.githubusercontent.com/64829176/210304198-2bc126b8-3234-4675-b20b-4cf927627ded.png)


### Confirmation Page -

![Screenshot (59)](https://user-images.githubusercontent.com/64829176/210304218-60611971-23b1-46b2-8948-8e5658a20417.png)






## Deployment

To deploy this project run

```bash
  npm run build
```
Upload the build file to a hosting app.
This App is hosted using Firebase.






  
### --------------------------------------------FOR DEVELOPER----------------------------------------
#### Firebase login should be via a cmd, the login might not work in powershell

#### After npm run build, any change in the application will have to updated using the npm run build command
#### firebase login -->
firebase init--> Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys          
--> use existing project        
--> public directory(build)       
--> npm run build(be in directory)       
--> firebase deploy         
#### repeat npm run build and firebase deploy everytime a new change is added to the project

#### to run emulators (firebase)
firebase emulators:start

git config --global user.email ""            
git config --global user.name ""          
git init         
git add -A         
git commit -m "Here is amazon clone "       
git remote add origin Link-to-app      
git push -u -f origin master      
