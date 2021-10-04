<template>
  <q-page padding>
    <DeckCard></DeckCard>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DeckCard from 'components/DeckCard.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    //EssentialLink
    DeckCard
  },
})

</script>
