# 🌍 Destino

Destino is a modern full-stack vacation rental web application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. The app lets travelers browse stays, save favorites, post reviews, and hosts manage listings with an intuitive UI.

---

## 📘 About Destino

Destino helps users discover and save rental homes, cottages, and apartments with a polished listing experience powered by session-aware wishlists and account-based storage.

Key functionality includes:
- pre-login wishlist support for guest users
- wishlist merge after signup/login
- listing creation, editing, and deletion for hosts
- review and rating system for stays
- responsive Bootstrap interface with custom styling

---

## 🚀 Features

- 🔑 **Authentication** – User signup, login, logout with Passport.js
- 💖 **Wishlist** – Save listings to wishlist before login and keep them after authentication
- 🏠 **Listing Management** – Hosts can create, edit, and delete listings
- 🖼️ **Image Uploads** – Cloudinary-powered photo upload support
- ⭐ **Reviews & Ratings** – Submit reviews and ratings for listings
- 📱 **Responsive Design** – Great on both mobile and desktop
- 🧭 **Navigation Drawer** – Quick access to profile, wishlist, and account actions
- ⚡ **Flash Messages** – Auto-dismiss notifications for success and error feedback

---

## 🧩 Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS templates, Bootstrap, JavaScript, CSS
- **Database:** MongoDB with Mongoose
- **Auth:** Passport.js, passport-local-mongoose
- **Storage:** Cloudinary for image handling
- **Session store:** connect-mongo
- **Validation:** Joi

---

## 📦 Project Structure

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

---

## 🔧 Environment Setup

Create a `.env` file with the following values:

```env
ATLASDB_URL=<your-mongodb-connection-string>
SECRET=<your-session-secret>
CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
CLOUDINARY_KEY=<cloudinary-api-key>
CLOUDINARY_SECRET=<cloudinary-api-secret>
```

If you are using a local MongoDB instance, set `ATLASDB_URL` or `MONGO_URL` accordingly.

---

## 🚀 Run Locally

Install dependencies and start the app:

```bash
npm install
npm run dev
```

Then open `http://localhost:8080`.

---

## 💡 Useful Commands

- `npm install` — install dependencies
- `npm run dev` — start the app with nodemon
- `node app.js` — run the server directly

---

## 📌 Notes

- Guest wishlist items are stored in session until login/signup.
- On login/signup, session wishlist items are merged into the user account.
- Flash notifications close automatically after a few seconds.
- The app currently uses Bootstrap with custom styles for a modern listing experience.

---

## 🌐 Demo

Live demo placeholder: `https://destino-airbnb-clone-full-stack-web.onrender.com/listings`

---

## 🌟 Future Improvements

- Add booking and payment workflow (Stripe/PayPal)
- Add advanced filters and search
- Add user profile and booking history pages
- Add map-based property search
- Improve listing details and host dashboard

---

## 🤝 Contribution

Contributions are welcome! Please open an issue or submit a pull request with enhancements.
