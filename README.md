# Amazon Clone
This project mimics the e-commerce website Amazon.com <br>
Bundled with login and sign up functionality, frontend of the 
project includes tons of items listed in the home page that 
can be added to cart.<br> When navigated to the basket those items
 will be displayed which can be removed from the basket as well.
There is a proceed to checkout button on the basket page which 
will redirect you to the checkout page.
In the checkout page stripe payment is used to process a 
card payment. After entering the card details you will have three 
buttons "Buy Now", "Click to Confirm", "Proceed to Confirmation Page".



## Dependencies

Dependencies used in the project are as follows

[![dependency - Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/) <br>
[![library - React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) <br>
[![UI - Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/) <br>
[![Styling - CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.css) <br>
[![AGPL License](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](http://www.firebase.com)<br>
[![AGPL License](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](http://www.javascript.com)




## Demo

https://clone-51f92.web.app

### Home Page -

![Screenshot (56)](https://user-images.githubusercontent.com/64829176/210304161-f8042878-a015-4107-9135-12d01b03192b.png)


### Login/Signup Page - 

![Screenshot (57)](https://user-images.githubusercontent.com/64829176/210304198-2bc126b8-3234-4675-b20b-4cf927627ded.png)


### Cart Page -

![Screenshot (58)](https://user-images.githubusercontent.com/64829176/210304180-379afff2-becd-4dd5-aacf-2ee7f443780c.png)


### Checkout Page -

![Screenshot (68)](https://user-images.githubusercontent.com/64829176/210386611-136b8814-01a8-4725-a08c-94ed63c44af3.png)


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
git branch -M main
git remote add origin Link-to-app      
git push -u -f origin master      
