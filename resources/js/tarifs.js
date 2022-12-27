
//PAGE TARIFS
//tableau des prix
//on attend que le document soit chargé pour exécuter jquery
$(document).ready(function(){
   //on cache les dd (lignes de tarifs) pour ne laisser apparaitre que les entête de menu
    $("dd").hide();

    $("dt").first().addClass("current");
    $("dd").first().slideDown();

    //on actionne le click sur le menu avec la fonction click
    $("#accordeon dt").click(function(){

         //on cible celui qui a été cliqué et on demande à passer à la prochaine ligne dd et de descendre vers le bas (slideDown)
        $("dd").slideUp();
       
            //si dd est caché il faut le descendre et le montrer
        if($(this).next("dd").is(":hidden")) {
            $(this).next("dd").slideDown();
            $("#accordeon dt").removeClass("current");

            //on rajoute une class sur l'élément actif pour que le dt (titre de ligne) reste en couleur quand il est ouvert (on l'ajoute au  css)
            $(this).addClass("current");

        }else {
             //les dd remontent tous dès que l'on passe au suivant
            $(this).next('dd') .slideUp();
            //on supprime la class quand dd remonte
            $(this).removeClass("current");
        }
    });

//bouton ouvrir et fermer
    //on cible les bouton avec leur id
    //on cible tous les dd pour les ouvrir tous
    $("#ouvrir").click(function(){
   $("dt").addClass("current")  ;
   $("dd").slideDown()    
   return false;
   
});
    //on cible tous les dd pour les ouvrir tous
    $("#fermer").click(function(){
        
        $("dt").removeClass("current")  ;
        $("dd").slideUp()    
        return false;
     });

});

