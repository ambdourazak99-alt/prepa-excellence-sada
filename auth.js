const firebaseConfig = {
  apiKey: "TA_CLE",
  authDomain: "TON_DOMAINE",
  projectId: "TON_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function loginEmail() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
  .then(() => window.location.href = "dashboard.html")
  .catch(error => alert(error.message));
}

function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(() => window.location.href = "dashboard.html");
}

function forgotPassword() {
  const email = prompt("Entre ton email");
  auth.sendPasswordResetEmail(email)
  .then(() => alert("Email envoyé"));
}