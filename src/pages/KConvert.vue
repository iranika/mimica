<template>
  <q-page class="flex flex-center">
    <q-card class="bookmarklet-card" flat>
      <q-card-section style="">
        <div class="text-h4" style="margin: 10px auto 10px auto;">KC</div>
        <div>
          某氏のために作った突貫のテキスト整形アプリです。v0.2
        </div>
      </q-card-section>
      <q-card-section>
        <q-input type="textarea" label="ここにテキストを貼る" v-model="text"></q-input>
      </q-card-section>
      <q-card-section>
        <q-input type="textarea" label="ここは整形後のテキスト(デバッグ用)" v-model="result"></q-input>
      </q-card-section>
      <q-card-section>
        <div>これをコピーして貼り付けてみて</div>
        <div>(右クリック→形式を選択して貼り付け→テキスト)</div>

        <table border="1">
          <tr>
            <td v-for="(v) in result.split('\n')" :key="v" class="tatenoko">
              {{ v }}
            </td>
          </tr>
        </table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.tatenoko {
  writing-mode: vertical-rl;
  text-combine-upright: 3;
  text-orientation: upright;
}

.bookmarklet-card{
  width:90%;
  max-width: 800px;
  margin: 20px 0 0 0;
}
.bml-field{
  white-space: pre;
  overflow: scroll;
}
</style>

<script lang="ts">
import { defineComponent,ref, computed } from 'vue';

const template = `
(演出A)

【ディレクションA】

セリフセリフセリフA

(演出A)


セリフセリフセリフB

【ディレクション】

セリフセリフセリフC

セリフセリフセリフD


`

export default defineComponent({
  name: 'Bookmarklet',
  components:{
  },
  setup(){
    const text = ref(template);
    function copy(scriptText: string){
      void navigator.clipboard.writeText(scriptText).then(() => {
        alert('クリップボードにコピーしました');
      })
    }
    const result = computed(()=>{
      return text.value.replace(/\(.+\)\n/g,'').replace(/（.+）\n/g,'').replace(/【.+】\n/g,'').replace(/\n{2,}/g,'\n').trim()
    })
    return {
      copy,
      text,
      result
    }
  }
})
</script>
