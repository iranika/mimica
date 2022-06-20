<template>
  <q-page class="flex flex-center">
    <q-card class="mixn-card">
      <q-card-section style="">
        <div class="text-h4" style="margin: 10px auto 10px auto;">{{ $t('あえぎ') }}<div class="text-caption" style="margin-left:10px; display: inline-block;">:WIP:0.10;</div></div>
        <div>
          あえぎはあえぎ声テキストを生成するアプリです。テキストを入力すると、そのテキストを喘がせることも出来ます。
        </div>
      </q-card-section>
      <q-card-section>
        <q-input label="テキスト" type="textarea" autogrow v-model="text"></q-input>
        <q-list>
          <q-expansion-item class="text-caption" label="オプション(任意)">
            <div>
              <div>テキスト強度の変更</div>
              <!--
              <q-slider markers v-model="fluc" :min="0" :max="4"></q-slider>
              <div class="text-caption">※テキストの強度を大きくすると置換される確率が減ります。</div>
              -->
            </div>
          </q-expansion-item>
        </q-list>
      </q-card-section>
      <q-card-section v-show="resultText">
        <div class="text-subtitle1 text-bold bi-fonts">{{ resultText }}</div>
      </q-card-section>
      <q-card-section>

        <q-btn color="pink" label="クリア" @click="clearText()" style="margin-right:10px;"></q-btn>
        <q-btn color="blue" label="ジェネレート！" @click="GenerateAegiText()"></q-btn>
      </q-card-section>
      <q-card-section id="caption">
        <div v-show="resultText">
          Twitterは文字数の制約があるので、ジェネレート結果を投稿するときはスクショがオススメです！
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<script lang="ts">
// eslint-disable-next-line
//import { randomInt } from 'crypto';
//import {TokenizerBuilder} from "kuromoji";
import kuromoji from 'kuromoji';
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { MixnStore } from 'src/store/mixn';
import { SpreadSheetInfo } from 'src/store/mixn';
import { Aegi } from 'src/store/utils/Aegi';

export default defineComponent({
  name: 'MainLayout',
  components: {
    //EssentialLink
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup(){
    const $q = useQuasar();
    const text = ref('しもたけ先生はえっちじゃないよ！');
    const resultText = ref('');

    function clearText(): void{
      text.value = '';
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const builder = kuromoji.builder({ dicPath: '/dict' });

    function GenerateAegiText() {
      resultText.value = (new Aegi(text.value)).AegiText
      /*
      builder.build((_, tokenizer) => {
        $q.loading.show();
        var t = tokenizer.tokenize(text.value);
        console.log(t);

        $q.loading.hide();

      });
      */

    }

    return {
      text,
      GenerateAegiText,
      resultText,
      clearText,
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