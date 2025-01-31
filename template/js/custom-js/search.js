import EcomSearch from '@ecomplus/search-engine'
import ecomPassport from '@ecomplus/passport-client'

EcomSearch.dslMiddlewares.push((dsl) => {
  let partnerId
  if (ecomPassport.checkLogin()) {
    partnerId = ecomPassport.getCustomer().group
  }
  dsl.query.bool.filter.push({
    nested: {
      path: 'warehouses',
      query: {
        bool: {
          filter: [{
            term: {
              'warehouses.code': partnerId || 'TESTE'
            }
          },
          {
            term: {
              'warehouses.in_stock': true
            }
          }]
        }
      }
    }
  })
})
