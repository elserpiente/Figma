var chain = "[./Ressources/image_test_1.png]={Sous-titre 1}(Texte 1)      =     [./Ressources/image_test_1.png]={Sous-titre 2}(Texte 2)     [./Ressources/image_test_2.png]={Sous-titre 3}(Texte 3)    =";
var im = false;
var st = false;
var tx = false;

function drawDNA() {
  let url_image = '';
  let ss_titre = '';
  let txt = '';
  let side = 0;
  let n_img = 0;
  let n_adn = 0;
  let ind = 0;
  for (var i = 0; i < chain.length; i++) {
    if (chain.charAt(i)==='=') {
      console.log('erer')
      $('.main').append('<div class="img_container_dna" id="img_container_dna_'+n_adn+'"><img class="ADN" src="./Ressources/adn.png" alt="ADN"></div>');
      if (url_image === ''){
        $('.frise').append('<div class="img_container"><img class="ADN_frise" src="./Ressources/adn.png" alt="ADN"></div>');
        $('.ADN_frise').css('visibility','collapse')
        $('.ADN_frise').css('top','0px')
      }else{
        url_image = '';
      }
      n_adn += 1;
    } else if (chain.charAt(i)==='[') {
        im = true;
    } else if (chain.charAt(i)===']') {
        im = false;
        //image à gauche
        $('.frise').append('<div class="img_container"><img class="ADN_frise" src="./Ressources/adn.png" alt="ADN"><img class="image_frise" id="image_frise_'+i+'" src="'+url_image+'" alt="image"></div>');
        $('.frise div').css('position','relative')
        $('.frise div').css('width','100%')

        $('.ADN_frise').css('visibility','collapse')
        $('.ADN_frise').css('top','0px')
        $('.image_frise').css('width','75%')
        $('.image_frise').css('position','absolute')
        $('.image_frise').css('top','50%')
        $('.image_frise').css('margin-top','-25%')

        if (side === 0){
          side = 1
          $('#image_frise_'+i).css('left','0%')
        }else{
          side = 0
          $('#image_frise_'+i).css('right','0%')
        }
    }else if (chain.charAt(i)==='{') {
      ind = n_adn-1
        st = true;
        //liaison sur frise ADN
        $('#img_container_dna_'+ind).append('<img class="link_frise" src="./Ressources/frise_link.png" alt="lien"> <div class="info_frise"></div>');
        $('.main div').css('position','relative')
        $('.link_frise').css('position','absolute')
        $('.link_frise').css('top','50%')
        $('.link_frise').css('margin-top','-25%')
        $('.link_frise').css('left','50%')

        $('.info_frise').css('position','absolute')
        $('.info_frise').css('top','40%')
        $('.info_frise').css('margin-top','-25%')
        $('.info_frise').css('left','310%')
        $('.info_frise').css('width','200%')
    }else if (chain.charAt(i)==='}') {
      st = false;
      $('#img_container_dna_'+ind+' div').append('<h2>'+ss_titre+'</h2> <div class="underline-sub-part"></div>');
      ss_titre = ''
    }else if (chain.charAt(i)==='(') {
      tx = true;
    }else if (chain.charAt(i)===')') {
      st = false;
      $('#img_container_dna_'+ind+'>div').append('<p>'+txt+'</p>');
      txt = ''
    }else{
      if (im) {
        url_image += chain.charAt(i)
      } else if (st) {
        ss_titre += chain.charAt(i)
      } else if (tx) {
        txt += chain.charAt(i)
      }
    }
  }
};
