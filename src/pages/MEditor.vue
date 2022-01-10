<template>
  <q-page padding>
    <!-- content -->
    <div class="text-h4">MEditor</div>
    <table border="1">
      <tr class="tr-sound">
        <td class="tr-sound" v-for="v in reverse(dialogue)" :key="v" v-html="v.sound" />
        <td class="tr-sound">音響/演出</td>
      </tr>
      <tr >
        <td class="tr-serifu" v-for="v in reverse(dialogue)" :key="v" v-html="v.text" />
        <td class="tr-serifu">セリフ</td>
      </tr>
    </table>
    <q-editor
      v-model="useEditoreStore().db.text"
      min-height="5rem"
      :definitions="{
        save: {
          tip: '保存します',
          icon: 'save',
          label: '保存',
          handler: useEditoreStore().commitEditorStore()
        }
      }"
      :toolbar="[
      ['left', 'center', 'right', 'justify'],
        ['bold', 'italic', 'strike', 'underline'],
        ['save']
      ]"
    />
    <div class="text-h5">デバッグエリア</div>
    <q-card v-text="useEditoreStore().db.text"></q-card>
  </q-page>
</template>

<style>
@font-face {
  font-family: geneikoburi;
  src: url("/fonts/GenEiKoburiMin_v6.1/GenEiKoburiMin6-R.ttf") format("ttf");
}
.tr-serifu{
  height: 300px;
  max-height: 300px;
  overflow-wrap:normal;
}
.tr-sound{
  height: 200px;
  max-height: 300px;
  overflow-wrap: break-word;
}
td {
  writing-mode: vertical-rl;
  text-combine-upright: 3;
  text-orientation: upright;
  font-family: geneikoburi;
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useEditoreStore } from 'src/store/editorStore';

interface Dialog{
  sound: string,
  text: string,
  raw: string
}

//TODO: ctrl+sのショートカット保存追加
export default defineComponent({
  // name: 'PageName'
  setup(){
    const result = computed(()=>{
      //return useEditoreStore().db.text.replace(/\(.+\)\n/g,'').replace(/（.+）\n/g,'').replace(/【.+】\n/g,'').replace(/\n{2,}/g,'\n').trim()
      return useEditoreStore().db.text
        .replace(/div/g, 'td')
        .replace(/<br>/g, '')
    })
    const dialogue = computed(()=>{
      //TODO:空行は除外してもろて
      //return useEditoreStore().db.text.replace(/\(.+\)\n/g,'').replace(/（.+）\n/g,'').replace(/【.+】\n/g,'').replace(/\n{2,}/g,'\n').trim()
      return useEditoreStore().db.text.split('<br>').map(v => {
        let dom = new DOMParser().parseFromString(v, 'text/html');
        var _sound = <Array<string>>[];
        let _text = <Array<string>>[];
        dom.querySelectorAll('div').forEach((elem)=>{
          if (elem.innerText[0] == '#' || elem.innerText[0] == '@'){
            _sound.push(elem.innerText)
          }else{
            _text.push(elem.innerText)
          }
        })

        return <Dialog>{
          sound: _sound.join('<br>'),
          text: _text.join('<br>'),
          raw: v
        }
      })
        /*
        .replace(/\(.+\)\n/g,'').replace(/（.+）\n/g,'').replace(/【.+】\n/g,'')
        .replace(/<div><\/div>/, '')
        .replace(/div/g, 'td')
        .replace(/<br>/g, '')
        //.replace(/(<\/td><td>)+/g, "")
        */
    })
    function reverse<T>(arr: Array<T>):Array<T>{
      if(arr.length === 0) return arr;
      var copy = arr.slice();
      return copy.reverse();
    }


    return {
      useEditoreStore,
      result,
      dialogue,
      reverse
    }
  }
})
</script>
