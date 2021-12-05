<template>
  <q-page class="flex flex-center">
    <!-- content -->
    <StripeCheckout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    ></StripeCheckout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import {  } from '';
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default defineComponent({
  // name: 'PageName'
  components:{
    StripeCheckout,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup(){}
})
</script>
