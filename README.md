# 🌍 AIRBNB  

A **full-stack web application** for listing and discovering places to stay, inspired by **Airbnb**.  
Built with **Node.js, Express, MongoDB, and EJS**, featuring authentication, image uploads, maps, and reviews.  

---

## 📊 Badges  

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)  
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)  
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=black)  

---

## 🚀 Features  

- 🔑 **User Authentication** – signup, login, logout with Passport.js  
- 🏠 **Property Listings** – add, edit, delete your listings  
- 🖼️ **Image Uploads** – Cloudinary integration  
- 🗺️ **Map Integration** – Mapbox API  
- ⭐ **Review & Rating System**  
- 📱 **Responsive Design** (mobile + desktop)  
- 🌙 **Light/Dark Mode Toggle**  

---

## 🛠 Tech Stack  

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, Bootstrap, Custom CSS  
- **Database:** MongoDB, Mongoose  
- **Authentication:** Passport.js, Express-Session  
- **File Storage:** Cloudinary  
- **Maps & Geo:** Mapbox  
- **Utilities:** dotenv, nodemon  

---
## 🛠️ Technologies & Packages Used:
- **MongoDB**
- **Express.js**
- **Node.js**
- **Passport.js for Authentication**
- **Cloudinary for Image Storage**
- **Connect Flash for Flash Messages**
- **Connect Mongo for Session Storage**
- **Cookie Parser for Parsing Cookies**
- **Dotenv for Environment Variables**
- **EJS for Template Rendering**
- **Express Session for Session Handling**
- **Joi for Data Validation**
- **Mongoose for MongoDB Object Modeling**
- **Multer for File Uploads**
- **Passport Local for Local Authentication**
- **Passport Local Mongoose for Mongoose-Specific Authentication**
---

## 📁 Project Structure

```
AIRHUB/
├── app.js
├── cloudConfig.js
├── cloudinary.js
├── middleware.js
├── package.json
├── schema.js
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── .js
│       ├── script.js
│       └── search-listings.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
└── views/
	├── error.ejs
	├── includes/
	│   ├── flash.ejs
	│   ├── footer.ejs
	│   └── navbar.ejs
	├── layouts/
	│   └── boilerplate.ejs
	├── listings/
	│   ├── edit.ejs
	│   ├── index.ejs
	│   ├── new.ejs
	│   └── show.ejs
	└── users/
		├── login.ejs
		└── signup.ejs
```


## 📸 Screenshots  

(Add actual screenshots here once you have them)  

![Home Page](https://via.placeholder.com/1000x500.png?text=Home+Page+Screenshot)  
![Listing Page](https://via.placeholder.com/1000x500.png?text=Listing+Page+Screenshot)  
![Dark Mode](https://via.placeholder.com/1000x500.png?text=Dark+Mode+Screenshot)  

---

## ⚡ Getting Started  

### 1️⃣ Clone the repository  

git clone https://github.com/sdmukhtar7709/Wanderlust-Airbnb-Clone-Full-Stack-Web-App-
cd AIRHUB

npm install

## 📌 Useful Commands
Initialize project: npm init -y
Install dependencies: npm install
Run server with nodemon: npx nodemon app.js


## 🌐 Demo

Take a look at your app in action:  
👉 [Live Demo — Listings Page](https://wanderlust-airbnb-clone-full-stack-web.onrender.com/listings)  

## 🌟 Future Improvements
Improve maps feature
Implement advanced search & filters
Improve UI/UX with React frontend
dd booking & payment system (Stripe/PayPal)

```sh
