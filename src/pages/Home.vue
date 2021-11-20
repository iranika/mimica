<template>
  <q-page>
    <q-card flat style="max-width:600px">
      <q-card-section>
        <h4>What's MimiCa ?</h4>
      </q-card-section>
      <q-card-section>
        MimiCaはいらにか(@happy_packet)が開発中の遊べる何かです。<br>
        遊びのための試験場だと思ってください。<br>
      </q-card-section>
      <q-card-section style="text-align: end;">
        いらにかより
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DeckCard from 'components/DeckCard.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    //EssentialLink
    // eslint-disable-next-line vue/no-unused-components
    DeckCard
  },
})

</script>
