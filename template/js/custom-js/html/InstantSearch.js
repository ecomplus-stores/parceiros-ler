import {
  i19close,
  i19items,
  i19search,
  i19searchProducts,
  i19seeAll
} from '@ecomplus/i18n'

import { i18n } from '@ecomplus/utils'
import ABackdrop from '@ecomplus/storefront-components/src/ABackdrop.vue'
import SearchEngine from '@ecomplus/storefront-components/src/SearchEngine.vue'

export default {
  name: 'InstantSearch',

  components: {
    ABackdrop,
    SearchEngine
  },

  props: {
    term: {
      type: String,
      default: ''
    },
    isVisible: {
      type: Boolean,
      default: true
    },
    pageSize: {
      type: Number,
      default: 8
    },
    autoFixScore: {
      type: Number,
      default: 0.83
    },
    searchEngineProps: Object,
    productCardProps: {
      type: Object,
      default () {
        return {
          isSmall: true
        }
      }
    }
  },

  data () {
    return {
      localTerm: this.term,
      searchTriggerTimer: null,
      searchTerm: '',
      history: [],
      totalSearchResults: 0,
      isSearching: false,
      hasSearched: false
    }
  },

  computed: {
    i19close: () => i18n(i19close),
    i19items: () => i18n(i19items),
    i19search: () => i18n(i19search),
    i19searchProducts: () => i18n(i19searchProducts),
    i19seeAll: () => i18n(i19seeAll)
  },

  methods: {
    hide () {
      this.$emit('update:is-visible', false)
      const $toggleSearch = $('#m-toggleSearch')

      if ($toggleSearch.length) {
       $toggleSearch.removeClass('active')     
      }
      
    },

    setSearchTerm (term) {
      const $form = this.$el.parentElement
      if ($form && $form.tagName === 'FORM') {
        const $inputs = $form.elements
        for (let i = 0; i < $inputs.length; i++) {
          if ($inputs[i].name === 'term') {
            $inputs[i].value = term
            break
          }
        }
        $form.submit()
      } else {
        this.localTerm = term
      }
    },

    handleFetching ({ fetching }) {
      this.isSearching = true
      fetching.finally(() => {
        this.isSearching = false
      })
    },

    handleSearch ({ ecomSearch }) {
      this.totalSearchResults = ecomSearch.getTotalCount()
      this.history = ecomSearch.history
        .filter(term => term.length > 2 && this.localTerm.indexOf(term) === -1)
        .slice(0, 6)
      if (!this.hasSearched) {
        this.hasSearched = true
      }
    }
  },

  watch: {
    isVisible: {
      handler (isVisible) {
        if (isVisible) {
          this.$nextTick(() => {
            if (this.$refs.input) {
              this.$refs.input.focus()
            }
          })
        }
      },
      immediate: true
    },

    localTerm: {
      handler (term) {
        const nextSearchTerm = term.length > 2 ? term : ''
        if (nextSearchTerm !== this.searchTerm) {
          clearTimeout(this.searchTriggerTimer)
          this.searchTriggerTimer = setTimeout(() => {
            this.searchTerm = nextSearchTerm
          }, 400)
        }
        this.$emit('update:term', term)
      },
      immediate: true
    }
  },
  mounted() {
    const $input = $('#search-input-m')
    const $toggleSearch = $('#m-toggleSearch')
    if ($input.length) {
      $input.on('click', () => {
        this.$emit('update:is-visible', true)
        $toggleSearch.addClass('active')        
      })
    }

    const $input2 = $('#search-input')  
    if ($input2.length) {
      $input2.on('click', () => {
        this.$emit('update:is-visible', true)
      })
    }

    

    if ($toggleSearch.length) {
      $toggleSearch.on('click', () => {
        $toggleSearch.toggleClass('active')        
        this.$emit('update:is-visible', !this.isVisible)
      })
    }
  },
}