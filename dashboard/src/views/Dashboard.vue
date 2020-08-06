<template>
  <div class="content-box">
    <CryptoBoard></CryptoBoard>
  </div>
</template>
<script>
import coins from '@/assets/group.json'
import {subscribeSymbol} from '../services/binance'
import {mapState} from 'vuex'
import CryptoBoard from "@/views/CryptoBoard";

export default {
  name: 'dashboard',
  data() {
    return {
      currencyList: coins,
      quote: 'BNB',
      quoteOptions: ['BNB', 'BTC', 'ETH', 'USDT'],
      baseCurrency: {},
    }
  },
  mounted() {
    subscribeSymbol({});
  },
  computed: {
    ...mapState(['currencies'])
  },
  components: {
    CryptoBoard
  },
  methods: {
    resetBase() {
      this.baseCurrency = {}
    },
  }
}
</script>