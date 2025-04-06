// Dialog : Ajouter dépense
var open_dialog = document.getElementById("dialog-open");
var close_dialog = document.getElementById("dialog-close");
var dialog = document.querySelector("dialog");

open_dialog.addEventListener("click", (e) => {
  dialog.showModal();
  dialog.style.visibility = "visible"
});

close_dialog.addEventListener("click", (e) => {
  dialog.close();
  dialog.style.visibility = "hidden";
});

// Liste des mois :
var mois = [
  "janvier", "février", "mars", "avril", "mai", "juin", 
  "juillet", "aout", "septembre", "octobre", "novembre", "décembre"
]

var select = document.getElementById("mois");
for (let i = 0; i < mois.length; i++) {
  select.innerHTML += "<option value="+i+">"+mois[i]+"</option>";
}

// Date d'aujourd'hui :
var date = document.querySelector(".date p");
var curr_date = new Date();
var full_date = `${curr_date.getDate()} ${mois[curr_date.getMonth()]} ${curr_date.getFullYear()}`;
date.textContent = full_date;

// Username :
var user = document.querySelector(".user p");
var user_info = JSON.parse(localStorage.getItem("user"));
if (user_info) {
  user.textContent = `${user_info.prenom} ${user_info.nom}`;
}

// Budget :
var budget = document.querySelector(".budget :nth-child(2)");
if(user_info) {
  budget.textContent = parseFloat(user_info.budget).toFixed(2) + " DH";
}

// Ajouter Dépense :
function ajouterDepense(depense) {
  var depenses = JSON.parse(localStorage.getItem("depenses")) || [];
  depenses.push(depense);
  localStorage.setItem("depenses", JSON.stringify(depenses));
}

var add_depense_button = document.getElementById("btn-ajouter");

add_depense_button.addEventListener("click", (e) => {
  let depense_description = document.getElementById("description").value;
  let depense_montant = document.getElementById("montant").value;
  const depenses = JSON.parse(localStorage.getItem("depenses")) || [];

  let lastId = depenses.length > 0 ? parseFloat(depenses[depenses.length - 1].id) + 1 : 1;
  let obj_depense = {
    "id" : lastId,
    "description" : depense_description,
    "montant" : depense_montant,
    "date" : new Date()
  };
  if(user_info) {
    if (parseFloat(user_info.budget) >= parseFloat(obj_depense.montant)) {
      let newBudget = (parseFloat(user_info.budget) - parseFloat(obj_depense.montant)).toString();
      let nom = user_info.nom;
      let prenom = user_info.prenom;
      localStorage.setItem("user", JSON.stringify({"nom" : nom, "prenom" : prenom, "budget" : newBudget}));
      ajouterDepense(obj_depense);
      location.reload();
    } else {
      alert("Budget insuffisant !");
    }
  }
  dialog.close();
  dialog.style.visibility = "hidden";
  document.getElementById("description").value = "";
  document.getElementById("montant").value = ""; 
});

// Afficher Dépenses :
function afficherDepense() {
  let depenses = JSON.parse(localStorage.getItem("depenses")) || [];
  let display = document.querySelector(".mes-depenses");
  let depense_card_template = document.getElementById("depense-card-template");
  depenses.forEach(depense => {
    const date = new Date(depense.date);
    const clone = depense_card_template.content.cloneNode(true);
    let depenseCard = clone.querySelector(".depense-card");
    clone.querySelector(".desc-date p:first-child").textContent = depense.description;
    clone.querySelector(".prix p").textContent = `${parseFloat(depense.montant).toFixed(2)} DH`;
    clone.querySelector(".desc-date p:nth-child(2)").textContent = `${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()}`;

    // ajouter event listner sur le boutton de suppression 
    clone.querySelector(".delete").addEventListener("click", () => {
      supprimerDepense(parseInt(depense.id));
      depenseCard.remove();
    });

    display.appendChild(clone);
  });
}
afficherDepense();

// Supprimer Dépense :
function supprimerDepense(id){
  let depenses = JSON.parse(localStorage.getItem("depenses"));
  let newDepenses = depenses.filter(depense => parseInt(depense.id) !== id);
  localStorage.setItem("depenses", JSON.stringify(newDepenses));
}