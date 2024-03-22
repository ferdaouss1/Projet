document.querySelector(".btn-ajouter").addEventListener("click", function(e) {
    e.preventDefault();
    let nom = document.forms["formulaire"]["first_one"].value;
    if (nom == "") {
        console.log("Please enter a value.");
        document
    } else {
        console.log("Entered value: " + nom);
    }
});

document.querySelector(".btn-annuler").addEventListener("click", function() {
    document.querySelector(".Form1").reset();
})

