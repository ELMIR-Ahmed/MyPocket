var btn_valider = document.getElementById("btn-valider");

btn_valider.addEventListener("click", (e) =>  {
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let budget = document.getElementById("budget").value;

  let regex = /^\d+(\.\d+)?$/;
  if (!regex.test(budget)) {
    alert("Veuillez saisir un nombre positive !");
  } else {
    let user = {"nom" : nom, "prenom" : prenom, "budget" : budget}
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "../pages/home.html";
  }

  document.getElementById("nom").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("budget").value = "";
});