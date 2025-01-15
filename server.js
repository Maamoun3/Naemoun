const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();


app.use(session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: true,
}));

// إعداد Passport.js
app.use(passport.initialize());
app.use(passport.session());

// إعداد استراتيجية Google OAuth2
passport.use(new GoogleStrategy({
  clientID: "1084783153663-f57p1fh0hlrqqilr1j8on2lu164plp25.apps.googleusercontent.com",  
  clientSecret: "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",  
  callbackURL: "http://localhost:3000/auth/google/callback",
}, (accessToken, refreshToken, profile, done) => {
  
  return done(null, profile);
}));


passport.serializeUser((user, done) => {
  done(null, user);
});


passport.deserializeUser((user, done) => {
  done(null, user);
});


app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"],
}));


app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3001/profile");  
  }
);


app.get("/api/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user); 
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
