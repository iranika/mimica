<template>
  <q-page class="flex flex-center">
    <q-card class="mixn-card">
      <q-card-section>
        <h4>MixN<pre class="text-caption">:WIP:0.17;</pre></h4>
        <div>
          MixNは好きな作品の名前をごちゃまぜにする"ソクラテスラ"っぽいアプリです。<br>
          テキストエリアに名前を貼り付けてジェネレートボタンを押したら生成されます。<br>
        </div>
      </q-card-section>
      <q-card-section>
        <q-input label="作品のタイトル１" type="textarea" autogrow v-model="text[0]"></q-input>
        <q-input label="作品のタイトル２" type="textarea" autogrow v-model="text[1]"></q-input>
        <q-input label="作品のタイトル３" type="textarea" autogrow v-model="text[2]"></q-input>
      </q-card-section>
      <q-card-section>
        <q-btn color="pink" label="クリア" @click="clearText()" style="margin-right:10px;"></q-btn>
        <q-btn color="blue" label="ジェネレート！" @click="MixText()"></q-btn>
      </q-card-section>
      <q-card-section>
        {{ t }}
      </q-card-section>
      <q-card-section>
        {{ resultText }}
      </q-card-section>
      <q-card-section v-show="resultText">
        <div v-show="resultText">
          Twitterは文字数の制約があるので、ジェネレート結果を投稿するときはスクショがオススメ！
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
// eslint-disable-next-line
import kuromoji from 'kuromoji';
//import { randomInt } from 'crypto';
//import {TokenizerBuilder} from "kuromoji";
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MainLayout',
  components: {
    //EssentialLink
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup(){
    const $q = useQuasar();

    const text = ref<Array<string>>([
      '【新作2本立て/5時間】ランダム要素で飽きない全身&耳舐めオナニーライフ♪+伊ヶ崎綾香の抜けるエッチなアドリブASMR【両耳舐め/射精管理編も】',
      '【初KU100収録 特価110円】母性たっぷりサキュバスお姉さんと甘々はげまし赤ちゃんごっこ',
      '―しろなのお家コース―ヒーリングサロンシエル'
    ]);
    const resultText = ref('');
    function clearText(): void{
      text.value = text.value.map(() => '')
    };
    const builder = kuromoji.builder({ dicPath: '/dict' });

    function MixText() {
      $q.loading.show()

      builder.build((err, tokenizer) => {
        var t=[];
        t=text.value.map(v => tokenizer.tokenize(v));
        //t[0] = tokenizer.tokenize(text.value[0])
        //t[1] = tokenizer.tokenize(text.value[1])
        //t[2] = tokenizer.tokenize(text.value[2])
        const random=function(num: number) {
          return Math.floor(Math.random()*num);
        };

        var res: Array<kuromoji.IpadicFeatures>=[];

        t.forEach(v => {
          res=res.concat(v.filter((s) => s.word_type=='KNOWN'&&s.pos=='名詞'));
        });


        const result=t[random(t.length-1)].map(s => {
          if(s.word_type == 'KNOWN' && s.pos == '名詞' && random(2) == 1) {
            if(s.surface_form.length==1&&random(2)==1) {
              return s;
            }
            const changeContext=res.filter(v => v.surface_form.length==s.surface_form.length)??res;
            console.log(s.surface_form, changeContext);
            const result=changeContext[random(changeContext.length)];
            res=res.filter(v => v.word_id != result.word_id);
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

    return {
      text,
      MixText,
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