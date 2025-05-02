const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config'),
      //'./base-config/sections.js': path.resolve(__dirname, 'template/js/netlify-cms/base-config/sections.js'),
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductCard.html'),   
      './js/ProductCard.js': path.resolve(__dirname, 'template/js/custom-js/html/ProductCard.js'),
      './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.html'),   
      './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.js'),     
    //   './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.html'),   
    //   './js/ProductGallery.js': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.js'),   
    // //   './scss/ProductGallery.scss': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.scss'),   
       './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'),   
       './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.js'),   
    //   './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'),   
    //   './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.js'),   
       './html/SearchEngine.html': path.resolve(__dirname, 'template/js/custom-js/html/SearchEngine.html'),   
       './js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/html/SearchEngine.js'),   
      './html/InstantSearch.html': path.resolve(__dirname, 'template/js/custom-js/html/InstantSearch.html'),   
    './js/InstantSearch.js': path.resolve(__dirname, 'template/js/custom-js/html/InstantSearch.js'),   
    //    './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/html/APrices.html'),   
       './html/CartItem.html': path.resolve(__dirname, 'template/js/custom-js/html/CartItem.html'),   
       './js/CartItem.js': path.resolve(__dirname, 'template/js/custom-js/html/CartItem.js'),   
    './html/TheCart.html': path.resolve(__dirname, 'template/js/custom-js/html/TheCart.html'),   
    './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/html/EcCheckout.html'),   
    './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/html/EcCheckout.js'),   
    './js/LoginModal.js': path.resolve(__dirname, 'template/js/custom-js/html/LoginModal.js'),   
    './html/PaymentMethods.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentMethods.html'),   
    // //   './html/EcSummary.html': path.resolve(__dirname, 'template/js/custom-js/html/EcSummary.html'),  
    // //   './html/QuantitySelector.html': path.resolve(__dirname, 'template/js/custom-js/html/QuantitySelector.html'),   
    // //   './js/QuantitySelector.js': path.resolve(__dirname, 'template/js/custom-js/html/QuantitySelector.js'),   
        './html/CartQuickview.html': path.resolve(__dirname, 'template/js/custom-js/html/CartQuickview.html'),   
    }
  }
})
