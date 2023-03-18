function vérif()
{
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if (email=="")
    {
        alert ("veuillez saisir votre email svp");
    }else if (pass=="")
    {
        alert ("veuillez saisir votre MDP svp");
    }else 
    {
        alert ("Votre connexion a été créer avec succées");
    }
}