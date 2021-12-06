<template>
  <q-card-section class="bml-card-section">
    <q-card-section>
      <div v-bind:class="HeaderClass" style="margin: 10px auto 10px auto;">{{ Title }}</div>
      <slot name="description"></slot>
      <slot name="bml-field" >
        <a :href="Bookmarklet">このリンクをドラッグ＆ドロップするか下記をブックマークに登録ください。</a>
        <q-field class="bml-field" stack-label label="script">
          <template v-slot:before>
            <q-btn flat  icon="content_copy" @click="copy(Bookmarklet)"></q-btn>
          </template>
          <template v-slot:control>
            <div class="full-width">
              {{ Bookmarklet }}
            </div>
          </template>
        </q-field>
      </slot>
    </q-card-section>
  </q-card-section>
</template>

<style scoped>
.bml-field{
  white-space: pre;
  overflow: scroll;
}
.bml-card-section{
  padding: 0 0 0 0;
}
</style>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'CompositionComponent',
  props: {
    Bookmarklet: {
      type: String,
      required: true
    },
    Title:{
      type: String,
      required: true
    },
    HeaderClass:{
      type: String,
      default: 'text-h5'
    }
  },
  setup() {
    function copy(scriptText: string){
      void navigator.clipboard.writeText(scriptText).then(() => {
        alert('クリップボードにコピーしました');
      })
    }
    return {
      copy
    };
  },
});
</script>
