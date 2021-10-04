<!-- some .vue file -->

<template>
  <div></div>
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="Language"
    dense
    emit-value
    map-options
    label-color="White"
    color="white"
    style="min-width: 100px;"
    dark
  />
</template>

<script>
//import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
      localeOptions: [
        { value: 'ja', label: '日本語' },
        { value: 'en-US', label: 'English' },
      ]
    }
  }
}
</script>

<style scoped>

</style>