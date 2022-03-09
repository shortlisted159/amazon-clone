# About this project:
### This projects mimics an e-commerce website that has login and sign up functionality. Other than these backend functionalities there are tons of items listed on the home page that can be added to cart, When navigated to the basket those items will be displayed which can be removed from the basket as well.
### There is a proceed to checkout button on the basket page which will redirect you to the checkout page.
### In the checkout page where stripe payment is used to process a card payment, After entering the card details you will have three buttons "Buy Now", "Click to Confirm", "Proceed to Confirmation Page".
### This project is built using React.js, Node.js, JavaScript, Firebase.
### This project has used Firebase for the backend ( For the sign up and the login page) and hosting.
### Material-UI has been used to import buttons and icons.\
# Checkout the project here:
--> https://clone-51f92.web.app




  
### --------------------------------------------FOR DEVELOPER----------------------------------------
#### Firebase login should be via a cmd, the login might not work in powershell

#### After npm run build, any change in the application will have to updated using the npm run build command
#### firebase login -->firebase init--> Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys  --> use existing project --> public directory(build)--> npm run build(be in directory)
--> firebase deploy
#### repeat npm run build and firebase deploy everytime a new change is added to the project

#### to run emulators (firebase)
firebase emulators:start

git config --global user.email "sanjuktas40@gmail.com"
git config --global user.name "Sanjukta"
git init
git add -A
git commit -m "Here is amazon clone "
git remote add origin git@github.com:shortlisted159/amazon-clone.git
git push -u -f origin master
