<template>
  <q-page padding>
    <!-- content -->
    <div class="text-h4">MEditor<div class="text-caption" style="margin-left:10px; display: inline-block;">:WIP:0.10;</div></div>
    <table border="1">
      <tr class="tr-sound">
        <td class="tr-sound font-geneikoburi" v-for="v in reverse(dialogue)" :key="v" v-html="v.sound" />
        <td class="tr-sound font-geneikoburi">@音響/#演出</td>
      </tr>
      <tr >
        <td class="tr-serifu font-geneikoburi" v-for="v in reverse(dialogue)" :key="v" v-html="v.text" />
        <td class="tr-serifu font-geneikoburi">セリフ</td>
      </tr>
    </table>

    <q-card
      flat
      bordered
    >
      <q-input
        type="textarea"
        v-model="useEditoreStore().db.text"
      />
      <q-separator />
      <q-toolbar>
        <q-btn flat round dense icon="save" class="q-mr-xs" @click="useEditoreStore().commitEditorStore()">
          <q-tooltip>保存します</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-card>
    <div>
      <div class="text-h5">デバッグエリア</div>
      <q-card v-text="useEditoreStore().db.text"></q-card>
    </div>
  </q-page>
</template>

<style>
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
  text-align: left;
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
      return useEditoreStore().db.text.split('\n\n').map(v => {
        let lines = v.split('\n')
        let _sound = <Array<string>>[]
        let _text = <Array<string>>[]
        lines.forEach((elem)=>{
          if (elem[0] == '#' 
              || elem[0] == '＃'
              || elem[0] == '@'
              || elem[0] == '＠'
          ){
            _sound.push(elem)
          }else{
            _text.push(elem)
          }
        });

        return <Dialog>{
          sound: _sound.join('<br/>'),
          text: _text.join('<br/>'),
          raw: v
        }
        /*
        .replace(/\(.+\)\n/g,'').replace(/（.+）\n/g,'').replace(/【.+】\n/g,'')
        .replace(/<div><\/div>/, '')
        .replace(/div/g, 'td')
        .replace(/<br>/g, '')
        //.replace(/(<\/td><td>)+/g, "")
        */
      })
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
