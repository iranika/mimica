<template>
  <q-page class="flex flex-center">
    <q-card class="mixn-card">
      <q-card-section style="">
        <div class="text-h4" style="margin: 10px auto 10px auto;">{{$t('Mixn')}}
          
        </div>
        <div>
          {{ $t('Mixn') }}は好きな作品の名前をごちゃまぜにする"ソクラテスラ"っぽいアプリです。テキストエリアに名前を貼り付けてジェネレートボタンを押したら生成されます。<br>
        </div>
        <q-btn style="float: right;" label="サンプルからタイトルを選ぶ" size="x-small" @click="openSample()"></q-btn>
      </q-card-section>
      <q-card-section>
        <q-input label="作品のタイトル１" type="textarea" autogrow v-model="text[0]"></q-input>
        <q-input label="作品のタイトル２" type="textarea" autogrow v-model="text[1]"></q-input>
        <q-input label="作品のタイトル３" type="textarea" autogrow v-model="text[2]"></q-input>
        <q-list>
          <q-expansion-item class="text-caption" label="オプション(任意)">
            <div>
              <div>テキスト強度の変更</div>
              <q-slider markers v-model="fluc" :min="0" :max="4"></q-slider>
              <div class="text-caption">※テキストの強度を大きくすると置換される確率が減ります。</div>
            </div>
          </q-expansion-item>
        </q-list>
      </q-card-section>
      <q-card-section v-show="resultText">
        <div class="text-subtitle1 text-bold bi-fonts">{{ resultText }}</div>
      </q-card-section>
      <q-card-section>
        <q-btn color="pink" label="クリア" @click="clearText()" style="margin-right:10px;"></q-btn>
        <q-btn color="blue" label="ジェネレート！" @click="MixText()"></q-btn>
      </q-card-section>
      <q-card-section id="caption">
        <div v-show="resultText">
          Twitterは文字数の制約があるので、ジェネレート結果を投稿するときはスクショがオススメです！
        </div>
      </q-card-section>
    </q-card>
    <q-dialog v-model="sampleForm">
      <q-card v-if="sampleForm">
        <q-card-section>
          <div class="text-h5">さんぷるタイトル一覧</div>
          <div class="text-caption">タイトルを３つ選んでください</div>
        </q-card-section>
        <q-table
          :rows="db.titles"
          :columns="columns"
          ref="tableRef"
          row-key="Title"
          selection="multiple"
          :selected="selected"
          :selected-rows-label="getSelectedString"
          wrap-cells
          @selection="onSelection"
        />
        <q-card-section v-if="false">
          <div>
            <div class="q-mt-md">
              Selected: {{ JSON.stringify(selected) }}
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat @click="clearSelected" label="Clear"/>
          <q-btn flat @click="sampleForm = false" label="Cancel"/>
          <q-btn flat @click="submitSelected" label="OK"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>


<script lang="ts">
// eslint-disable-next-line
import kuromoji from 'kuromoji';
//import { randomInt } from 'crypto';
//import {TokenizerBuilder} from "kuromoji";
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { MixnStore } from 'src/store/mixn';
import { SpreadSheetInfo } from 'src/store/mixn';

export default defineComponent({
  name: 'MainLayout',
  components: {
    //EssentialLink
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup(){
    const $q = useQuasar();
    const text = ref<Array<string>>([
      '少子化×孕ませまっちんぐ!清楚なJK・茉優と子作り中出しえっち',
      '大王様と後宮の女達-ハメ放題!脳がバグるほど気持ちいい三方向快感ヘブン!朝も昼も夜も欲しがる女達とヤリまくり!',
      'マンションの隣人は1人暮らしの処女JKだった!?生徒会系JKが仕事の疲れを最高に癒してくれるラブラブえっちなボイスドラマ♪'
    ]);
    const resultText = ref('');
    function clearText(): void{
      text.value = text.value.map(() => '')
    };
    const builder = kuromoji.builder({ dicPath: '/dict' });
    const fluc = ref(1)
    function MixText() {
      $q.loading.show()

      builder.build((err, tokenizer) => {
        var t=[];
        t=text.value.map(v => tokenizer.tokenize(v));
        const random=function(num: number) {
          return Math.floor(Math.random()*num);
        };

        var res: Array<kuromoji.IpadicFeatures>=[];

        t.forEach(v => {
          res=res.concat(v.filter((s) => s.word_type=='KNOWN'&&s.pos=='名詞'));
        });

        const result = t[random(t.length)].map(s => {
          if(s.word_type == 'KNOWN' && s.pos == '名詞') {
            if (s.pos_detail_2 == '人名' && random(4) != 0){
              return s;
            }
            if (s.surface_form.length == 1 && random(fluc.value) == 0) {
              return s;
            }
            var changeContext = res.filter(v => v.surface_form.length == s.surface_form.length) ?? res;
            if (changeContext.length <= 3) changeContext = res;
            const result = changeContext[random(changeContext.length)];
            res = res.filter(v => v.word_id != result.word_id);
            return result;
          } else {
            return s;
          }
        });

        console.log('res', res);
        console.log('result', result);
        resultText.value = result.map(v => v.surface_form).join('');
        $q.loading.hide();
      });
    }

    const db = MixnStore.getInstance().db
    const sampleForm = ref(false);
    function openSample(): void {
      sampleForm.value = true;
      //console.log(db.titles.map(v => v))
    }

    const columns = [
      {
        name: 'title',
        required: true,
        label: 'タイトル',
        align: 'left',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        field: (row: { Title: string; }) => row.Title,
        //format: (val:string) => `${val}`,
      }
    ]
    const selected = ref(<Array<SpreadSheetInfo>>[])

    const tableRef = ref(null);

    function onSelection({ rows, added }:{ rows: Array<SpreadSheetInfo>, added: boolean}){
      if (rows.length === 0 || tableRef.value === void 0){
        return
      }
      const operateSelection = added === true
      ? (selRow: SpreadSheetInfo) => {
        if (selected.value.length < 3){
          selected.value.push(selRow)
        }
      }
      : (selRow: SpreadSheetInfo) => {
        const index = selected.value.indexOf(selRow)
        if (index > -1){
          selected.value = selected.value.slice(0, index).concat(selected.value.slice(index + 1))
        }          
      }
      operateSelection(rows[0])
    }

    function submitSelected(){
      text.value = selected.value.map(v => v.Title);
      sampleForm.value = false;
    }
    function clearSelected(){
      selected.value = <Array<SpreadSheetInfo>>[]
    }

    return {
      text,
      MixText,
      openSample,
      resultText,
      clearText,
      fluc,
      db,
      columns,
      sampleForm,
      selected,
      group: ref([]),
      tableRef,
      onSelection,
      submitSelected,
      clearSelected,
      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of 3`
      },

    }
    //const tokenizer = new TokenizerBuilder()
  }
})

</script>

<style scoped>
.mixn-card{
  width:90%;
  max-width: 600px;
}

</style>