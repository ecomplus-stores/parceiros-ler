window.deny_sku = [
  "COD_ITEM6165", "COD_ITEM5406", "COD_ITEM5449", "COD_ITEM5930", "COD_ITEM7174", "COD_ITEM7173", "COD_ITEM7172", "COD_ITEM6099", "COD_ITEM5795","XYN5740", "JBA3448", "LSE8399", "XRV8745", "WGH9410", "WAB6774", "TUU4056","COD_ITEM7175","COD_ITEM8042", "COD_ITEM8043", "COD_ITEM8044", "COD_ITEM8045", "COD_ITEM8046", "COD_ITEM8047", "COD_ITEM8048", "COD_ITEM8049", "COD_ITEM8050", "COD_ITEM8031", "COD_ITEM8032", "COD_ITEM8033", "COD_ITEM8034", "COD_ITEM8035", "COD_ITEM8038", "COD_ITEM8039", "COD_ITEM8040", "COD_ITEM8041", "COD_ITEM8051", "COD_ITEM8052","TOY8466","COD_ITEM8030","COD_ITEM8031","COD_ITEM8032","COD_ITEM8033","COD_ITEM8034","COD_ITEM8035","COD_ITEM8040","COD_ITEM8041","COD_ITEM8042","COD_ITEM8043","COD_ITEM8044","COD_ITEM8045","COD_ITEM8046","COD_ITEM8047","COD_ITEM8048","COD_ITEM8049","COD_ITEM8050","COD_ITEM8051","COD_ITEM8052","COD_ITEM8057","COD_ITEM8058","COD_ITEM8059","COD_ITEM8060","COD_ITEM8034","COD_ITEM8038","COD_ITEM8039","COD_ITEM8068","COD_ITEM8069","COD_ITEM8070","COD_ITEM8071","COD_ITEM8072","COD_ITEM8073","COD_ITEM8074","COD_ITEM8075","COD_ITEM8076","COD_ITEM8077","COD_ITEM8078","COD_ITEM8079","COD_ITEM8080","COD_ITEM8081","COD_ITEM8082","COD_ITEM8083","COD_ITEM8084","COD_ITEM8085","COD_ITEM8086","COD_ITEM8087","COD_ITEM8088","COD_ITEM8089","COD_ITEM8090","COD_ITEM8091","COD_ITEM8092","COD_ITEM8093","COD_ITEM8094","COD_ITEM8095","COD_ITEM8096","COD_ITEM8097","COD_ITEM8098","COD_ITEM8099","COD_ITEM8100","COD_ITEM8101","COD_ITEM8102","COD_ITEM8103","COD_ITEM8104","COD_ITEM8105","COD_ITEM8106","COD_ITEM8107","COD_ITEM8108","COD_ITEM8109","COD_ITEM8110","COD_ITEM8111","COD_ITEM8112","COD_ITEM8113","COD_ITEM8114","COD_ITEM8115","COD_ITEM8116","COD_ITEM8117","COD_ITEM8118","COD_ITEM8119","COD_ITEM8120","COD_ITEM8121","COD_ITEM8122","COD_ITEM8123","COD_ITEM8124","COD_ITEM8125","COD_ITEM8126","COD_ITEM8127","COD_ITEM8128","COD_ITEM8129","COD_ITEM8130","COD_ITEM8131","COD_ITEM8132","COD_ITEM8133","COD_ITEM8134","COD_ITEM8135","COD_ITEM8136","COD_ITEM8137","COD_ITEM8138","COD_ITEM8139","COD_ITEM8140","COD_ITEM8141","COD_ITEM8142","COD_ITEM8143","COD_ITEM8144","COD_ITEM8145","COD_ITEM8146","COD_ITEM8147","COD_ITEM8148","COD_ITEM8149","COD_ITEM8150","COD_ITEM8151","COD_ITEM8152","COD_ITEM8153","COD_ITEM8154","COD_ITEM8155","COD_ITEM8156","COD_ITEM8159","COD_ITEM8160","COD_ITEM8161"
];
window.allow_sku = [];
/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
!function(a){
  a.fn.equalHeightsWithValue = function(){
      var maxHeight = 0, 
          elements = a(this);
      
      elements.each(function(){
          var currentHeight = a(this).innerHeight();
          if (currentHeight > maxHeight) {
              maxHeight = currentHeight;
          }
      });

      // Retorna a altura máxima encontrada
      return maxHeight; 
  };

  a("[data-equal]").each(function(){
      var container = a(this), 
          selector = container.data("equal");
      
      // Aplica a função equalHeightsWithValue e captura a altura máxima
      var maxHeight = container.find(selector).equalHeightsWithValue();

      // Obtém o nome do seletor (remoção de possíveis caracteres especiais para um nome de variável CSS válido)
      var varName = selector.replace(/[^a-zA-Z0-9_-]/g, '');

      // Adiciona a variável CSS no body
      document.body.style.setProperty('--' + varName + '-height', maxHeight + 'px');
      
      // Você pode usar o valor maxHeight conforme necessário
      console.log("Altura máxima igualada: " + maxHeight + " pixels");
  });
}(jQuery);

$.fn.isInViewport = function () {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

const EcomPassport = require('@ecomplus/passport-client')
const client = EcomPassport.ecomPassport.getCustomer();

const search = new EcomSearch()
//window.brands = search.getBrands()


let mouseDown = false;
let startX, scrollLeft;
const sliders = document.querySelectorAll('.breakline-false');

sliders.forEach(slider => {
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mousemove', move, false);
});

window.addEventListener('mouseup', stopDragging, false);
window.addEventListener('mouseleave', stopDragging, false);

function startDragging(e) {
  mouseDown = true;
  startX = e.pageX - this.offsetLeft;
  scrollLeft = this.scrollLeft;
}

function stopDragging() {
  mouseDown = false;
}

function move(e) {
  if (!mouseDown) return;
  const x = e.pageX - this.offsetLeft;
  const scroll = x - startX;
  this.scrollLeft = scrollLeft - scroll;
}

window.whatsappRedirect = function(type){
  if(type == "consultor"){
    window.open(`https://wa.me/5512991913123?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20compra%20em%20grande%20quantidade.`,`_blank`);
  }
}



$(document).ready(function(){
  //headerBrands();
  if($('.page--categories .category-banner').length > 0 && $(`.page--categories .category-description`).length > 0){
    $('.page--categories .category-banner, .page--categories .category-description, .page--categories .page-title').wrapAll('<div id=category_heading_box></div>');
    $(`.page--categories .category-description, .page--categories .page-title`).wrapAll('<div></div>');
  }

  $('.apx-banner_slider').addClass('owl-carousel')
  $('.apx-banner_slider').owlCarousel({
      loop:true,
      margin:0,
      items:1,
      dots:true,
      nav:false,
      autoplay:true,
      autoplayTimeout:4000
  });
  
  if(window.innerWidth > 990){
    
    $('.products-carousel__list').addClass('owl-carousel')
    $('.products-carousel__list').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
              nav:false,
              stagePadding:0,
              margin:15
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              dots:false,
              nav:false,
              loop:true
          }
      },
      onInitialized: function(){        
        setTimeout(function(){ $(`.products-carousel__list`).trigger(`refresh.owl.carousel`) }, 750);
        $(window).scroll(function(){
          $(`.products-carousel__list`).each(function(){
            if($(this).isInViewport() && !$(this).hasClass(`reinitialized`)){
              $(this).trigger(`refresh.owl.carousel`)
              $(this).addClass('reinitialized')
            }
          })
        })
      }
    });
    
   
  }else{
    
  }

  $('.apx_banner-grid.grid-format-5 .row').attr('class','owl-carousel')
  $('.apx_banner-grid.grid-format-5 .owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      items:3,
      dots:false,
      nav:false,
      autoplay:true,
      autoplayTimeout:4000,
      responsive:{
        0:{
            items:1,
            dots:true
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    },
  });
  

  $('body').css('--header-vh-main', ($('header#header').innerHeight()) + 'px');
  $('body').css('--inner-width', ($('body').innerWidth()) + 'px');

  //adiciona nome do usuário aos elementos username
  const client = EcomPassport.ecomPassport.getCustomer();   
  $('[username]').text(client.display_name || `Visitante` )

  placeFavoritesAside();
});

$(window).resize(function(){
  $('body').css('--inner-width', ($('body').innerWidth()) + 'px');
})

$('body').on('click','#wishlist-button, .favorites__aside  .apx-side-heading button, #m-toggleFavorites', function(){
  $('#favorites-quickview').toggleClass('visible')
  $(`#m-toggleFavorites`).toggleClass(`active`)
});

$('body').on('click','.product-card__favorite-remove', function(){
  toggleFavoriteFront(this);
});

$('body').on('click','.product-card__favorite', function(){  
  if(!client.display_name){
    window.location.href = "/app/#/account/"
    return false
  }else{
    placeFavoritesAside();
  }  
})


async function placeFavoritesAside(){  
  $(`.favorites__body`).empty();
  try {
    const { favorites } = await EcomPassport.ecomPassport.getCustomer();    
    search.setProductIds(favorites).fetch().then(result => {
      $.each(result.hits.hits, function(k,i){
        let item = i._source;
        $(`<div class="row item"><div class=col-12><div class="favorite-list product-card"data-sku=${item.sku} data-product-id=${item._id}><section><a class=product-card__link href=/${item.slug} title=${item.name}><div class=product-card__pictures><img alt="${item.pictures ? item.pictures[0].normal.alt : ''}"src="${item.pictures ? item.pictures[0].normal.url : '/assets/img-placeholder.png'}"></div></a><div class=product-card__content-group><div class='row align-items-start'><div class=col><a class=product-card__link href=/${item.slug} title=${item.name}><h3 class=product-card__name>${item.name}</h3></a></div><div class=col-auto><button class="btn product-card__favorite-remove"aria-label="Remover dos favoritos"><svg fill=none height=16 viewBox="0 0 16 16"width=16 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_21_6728)><path d="M5.33331 8.00004H10.6666M14.6666 8.00004C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00004C1.33331 4.31814 4.31808 1.33337 7.99998 1.33337C11.6819 1.33337 14.6666 4.31814 14.6666 8.00004Z"stroke=#666666 stroke-linecap=round stroke-linejoin=round /></g><defs><clipPath id=clip0_21_6728><rect fill=white height=16 width=16 /></clipPath></defs></svg></button></div></div><div class="prices product-card__prices "><span class='prices__compare ${item.base_price ? '' : 'd-none'}'><s>${item.base_price ? (item.currency_symbol + ' ' +item.base_price.toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2,minimumFractionDigits: 2})) : ''}</s> </span><strong class=prices__value>${item.currency_symbol} ${item.price.toLocaleString('pt-br', {style: 'decimal', maximumFractionDigits: 2,minimumFractionDigits: 2})}</strong></div><div class="fade product-card__buy"><button class="btn btn-primary btn-sm"data-id=${item._id} type=button>Adicionar ao Carrinho</button></div></div></section><div></div></div></div>`).appendTo(`.favorites__body`);
      });      
    })
    
  }catch(e){
    console.log(e)
  }
}

async function toggleFavoriteFront(el){
  try {
    let productId = $(el).attr('data-id');
    const { favorites } = await EcomPassport.ecomPassport.getCustomer();   
    const favIndex = favorites.indexOf(productId)
    favorites.splice(favIndex, 1) 
    EcomPassport.ecomPassport.requestApi('/me.json', 'patch', { favorites })
    $(el).closest('.item').remove();
    
  }catch(e){
    console.log(e)
  }
}

const $timers = $('.timer_');
if ($timers.length) {
  const formatTime_ = timeNumber => timeNumber.toString().padStart(2, '0')
  $timers.each(function () {
    const { end, maxHours } = $(this)[0].dataset
    const diffSeconds = Math.min(
      (new Date(end).getTime() - Date.now()) / 1000,
      maxHours * 3600
    )

    if (diffSeconds > 0) {
      let hours = Math.floor(diffSeconds / 3600)
      const hoursAsSeconds_ = hours * 3600
      let minutes = Math.floor((diffSeconds - hoursAsSeconds_) / 60)
      let seconds = parseInt(diffSeconds - hoursAsSeconds_ - minutes * 60, 10)
      const $timerCount_ = $(this).find('.timer__count')

      const updateTimerCount_ = () => {
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          seconds = minutes = 59
        } else {
          return clearInterval(stopwatch)
        }
        $timerCount_.html(`<span class="hh">${formatTime_(hours)}</span><span class="mm">${formatTime_(minutes)}</span><span class="ss">${formatTime_(seconds)}</span>`)
      }
      const stopwatch = setInterval(updateTimerCount_, 1000)
      updateTimerCount_()
    }
  })
}

window.equalHeightsList = function(){
  // setTimeout(() => {
  //   if($(`#page-home`).length > 0){
  //     $('.products-carousel__list .owl-item.active').each(function(){
  //       document.body.style.setProperty('--product-card__name-height', $(this).find('.product-card__name').closest(`a`).equalHeightsWithValue() + 'px');
  //       document.body.style.setProperty('--product-card__prices-height', $(this).find('.product-card__prices').equalHeightsWithValue() + 'px');
  //       document.body.style.setProperty('--product-card-height', $(this).find('.product-card').equalHeightsWithValue() + 'px');
        
  //     });
  //   }else{
  //     $('#content .product-card__name').closest(`span`).attr(`style`,``);
  //     $('#content .product-card__name').closest(`span`).equalHeights()
  //     $('#content .product-card').attr(`style`,``);
  //     $('#content .product-card').equalHeights()
  //   }
    
  // },1500)
  
}


function checkBackdropElements() {
  document.querySelectorAll('.backdrop').forEach(element => {
      const zIndex = window.getComputedStyle(element).getPropertyValue('z-index');
      if (zIndex === '1080') {
          element.classList.add('ativo');
      } else {
          element.classList.remove('ativo');
      }
  });
}
setInterval(checkBackdropElements, 500);
