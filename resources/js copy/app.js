$(function() {
    //Dark mode

    $('.mode').click(function(e) {
        //on passe de la lune vide à la lune pleine (une sorte de toggle)
        if($('.mode i').hasClass('bx-moon')) {
            $('.mode i').removeClass('bx-moon').addClass('bxs-moon');
            $('body').attr('data-theme', 'darkmode'); // pour permutter en mode dark
        } else {
            $('.mode i').removeClass('bxs-moon').addClass('bx-moon');
            $('body').removeAttr('data-theme'); //pour revenir au mode light
        }
        e.preventDefault(); //annule l'action du lien

    });
    

//PAGE REALISATIONS

    //Filtrer les projets du portefolio
        //on cible les liens du filtre 
        $('.filtres a').click(function(e) {
            //on cible la classe active en l'enlevant
            $('.filtres a').removeClass('active');

            //on récupère le lien qui a été cliqué en lui ajoutant la classe active (la couleur passe d'un filtre à l'autre au click)
            $(this).addClass('active')
            //on stock dans une variable le href
            let href = $(this).attr('href');
            
            //on enlève le caractère # devant le nom du filtre
            let filtre = href.substring(1, href.length)
            //alert(filtre); 

            //on cache tous les projets pour montrer seulement ceux qui sont triés avec le filtre choisis
            $('.projet').hide();
            //si on clique sur le filtre "tous", toutes les photos apparaissent
            if(filtre=='all') {
                $('.projet').show();
            } else {
                $('.projet[data-filtre="' + filtre + '"]').show(); //sinon n'apparaissent que celles choisies au click sur le filtre
            }
            //on annule l'action (au click)
            e.preventDefault();

        });
    });

//PAGE ACCUEIL

//CREATION DU BOUTON PLAY HOMEPAGE
  //on stock le boutton dans une variable appelée btn
  let btn = document.getElementById('btn');
  let video = document.getElementById('video');
  
  //on déclanche un évènement au click de la souris qui déclanchera la fonction ci-dessous
  btn.addEventListener('click', function(){
      //si la vidéo est en pause ça relance la lecture : 
        if(video.paused){
          video.play();
        //et inversement:   
      }else{
          video.pause();
      }
  })



  
//SLIDER ACCUEIL
let droit    = document.getElementById('droite');
let gauche   = document.getElementById('gauche');
let controle = document.getElementById('controle');
let images   = document.getElementsByClassName('image');
let n = -1;

for(let rond = 0; rond < images.length; rond += 1) {
    controle.innerHTML += `<span id="${rond}"></span>`;
}
let span = document.querySelectorAll('#controle span');
span[0].classList.add('active');


droit.addEventListener('click', function() {   
    n += 1;
    if(n >= (images.length)-1) {
        n = -1;
        let derniere = (images.length)-1;       
        images[derniere].style.display = "none";
        images[0].style.display = "block";
        span[0].classList.add('active');
        span[derniere].classList.remove('active');
    } else {
        images[n].style.display = "none";
        images[n+1].style.display = "block"; 
        span[n].classList.remove('active');
        span[n+1].classList.add('active');
    } 
});

gauche.addEventListener('click', function() {
    for(let x = 0; x <= (images.length)-1; x+= 1) {
        images[x].style.display = "none";
    }
    if(n == -1) {
        let z = (images.length)-1;
        images[z].style.display = "block";
        span[z].classList.add('active');
        span[0].classList.remove('active');
        n = (images.length)-2;
    } else {
        images[n].style.display = "block";
        span[n].classList.add('active');
        span[n+1].classList.remove('active');
        n -= 1;
    }
});

for(let spa of span) {
    spa.addEventListener('click', function() {
        for(let a = 0; a < images.length; a += 1) {
            span[a].classList.remove('active');
            images[a].style.display = "none";
        }
        let spanID = this.id;
        span[spanID].classList.add('active');
        images[spanID].style.display = "block";

        n = spanID-1;
    });
}



    