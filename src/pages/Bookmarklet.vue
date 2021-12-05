<template>
  <q-page class="flex flex-center">
    <q-card class="bookmarklet-card">
      <q-card-section style="">
        <div class="text-h4" style="margin: 10px auto 10px auto;">{{$t('Bookmarklet')}}</div>
        <div>
          ここはiranikaが作ったBookmarkletを公開するおもちゃ箱です。
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-h5" style="margin: 10px auto 10px auto;">BrowseNowRIP</div>
        これは BrowseNowのブックマークレットオンリー実装です。<br>
        Twitter公式のシェア用URLに依存しています。<br>

        <a :href="BrowseNowText">このリンクをドラッグ＆ドロップするか下記をブックマークに登録ください。</a>
        <q-field class="bml-field" stack-label label="script">
          <template v-slot:control>
            <div class="full-width">
              {{ BrowseNowText }}
            </div>
            </template>
          <template v-slot:before>
            <q-btn flat  icon="content_copy" @click="copy(BrowseNowText)"></q-btn>
          </template>
        </q-field>
      </q-card-section>
      <q-card-section>
        <div class="text-h5" style="margin: 10px auto 10px auto;">For DLsite</div>
        DLsiteで使えるブックマークレット集です。<br>

        <q-card-section>
          <div class="text-h6" style="margin: 10px auto 10px auto;">SSS: SearchSomeSite</div>
          DLsiteの作品ページから直接BoothやFanzaでタイトル検索ページにタイトルを入れて検索してくれるやつです。<br>
          <a :href="SearchBooth">このリンクをドラッグ＆ドロップするか下記をブックマークに登録ください。</a>
          <q-field class="bml-field" stack-label label="Go to Booth">
            <template v-slot:control>
              <div class="full-width">
                {{ SearchBooth }}
              </div>
              </template>
            <template v-slot:before>
              <q-btn flat icon="content_copy" @click="copy(SearchBooth)"></q-btn>
            </template>
          </q-field>
          <br>
          <a :href="SearchFanza">このリンクをドラッグ＆ドロップするか下記をブックマークに登録ください。</a>
          <q-field class="bml-field" stack-label label="Go to Fanza">
            <template v-slot:control>
              <div class="full-width">
                {{ SearchFanza }}
              </div>
              </template>
            <template v-slot:before>
              <q-btn flat icon="content_copy" @click="copy(SearchFanza)"></q-btn>
            </template>
          </q-field>
        </q-card-section>
        <q-card-section>
          <div class="text-h6" style="margin: 10px auto 10px auto;">Open Gift Page</div>
          DLsiteで購入済みの作品ページから直接ギフトページを開くやつです<br>

          <a :href="OpenGiftPage">このリンクをドラッグ＆ドロップするか下記をブックマークに登録ください。</a>
          <q-field class="bml-field" stack-label label="script">
            <template v-slot:control>
              <div class="full-width">
                {{ OpenGiftPage }}
              </div>
              </template>
            <template v-slot:before>
              <q-btn flat  icon="content_copy" @click="copy(OpenGiftPage)"></q-btn>
            </template>
          </q-field>
        </q-card-section>

      </q-card-section>

    </q-card>
  </q-page>
</template>

<style scoped>
.bookmarklet-card{
  width:90%;
  max-width: 800px;
}
.bml-field{
  white-space: pre;
  overflow: scroll;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import BrowseNowText from '!!raw-loader!./bookmarklet/BrowseNowRIP.js';
import SearchBooth from '!!raw-loader!./bookmarklet/SearchBooth.js';
import SearchFanza from '!!raw-loader!./bookmarklet/SearchFanza.js';
import OpenGiftPage from '!!raw-loader!./bookmarklet/OpenGiftPage.js';

export default defineComponent({
  name: 'Bookmarklet',
  setup(){
    function copy(scriptText: string){
      void navigator.clipboard.writeText(scriptText).then(e => {
        alert('クリップボードにコピーしました');
      })
    }
    return {
      copy,
      BrowseNowText,
      SearchBooth,
      SearchFanza,
      OpenGiftPage
    }
  }
})
</script>
