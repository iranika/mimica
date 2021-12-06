<template>
  <q-page class="flex flex-center">
    <q-card class="bookmarklet-card">
      <q-card-section style="">
        <div class="text-h4" style="margin: 10px auto 10px auto;">{{$t('Bookmarklet')}}</div>
        <div>
          ここはiranikaが作ったBookmarkletを公開するおもちゃ箱です。<br>
          ※使い方等の解説はそのうち何かしらのドキュメントを作ります（たぶん）<br>
        </div>
      </q-card-section>

      <BookmarkletComponent Title="BrowseNow" :Bookmarklet="BrowseNowText">
        <template #description>
          これは BrowseNowのブックマークレットオンリー実装です。<br>
          Twitter公式のシェア用URLに依存しています。<br>
        </template>
      </BookmarkletComponent>
      <q-card-section>
        <div class="text-h5" style="margin: 10px auto 10px auto;">For DLsite</div>
        DLsiteで使えるブックマークレット集です。<br>
        <BookmarkletComponent Title="SSS: SearchSomeSite" HeaderClass="text-h6">
          <template #description>
            DLsiteの作品ページから直接BoothやFanzaでタイトル検索ページにタイトルを入れて検索してくれるやつです。<br>
          </template>
          <template v-slot:bml-field>
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
          </template>
        </BookmarkletComponent>

        <BookmarkletComponent :Bookmarklet="OpenGiftPage" Title="Open Gift Page" HeaderClass="text-h6">
          <template v-slot:description>
            DLsiteで購入済みの作品ページから直接ギフトページを開くやつです<br>
          </template>
        </BookmarkletComponent>
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
import BookmarkletComponent from 'src/components/BookmarkletComponent.vue';
import BrowseNowText from '!!raw-loader!./bookmarklet/BrowseNowRIP.js';
import SearchBooth from '!!raw-loader!./bookmarklet/SearchBooth.js';
import SearchFanza from '!!raw-loader!./bookmarklet/SearchFanza.js';
import OpenGiftPage from '!!raw-loader!./bookmarklet/OpenGiftPage.js';


export default defineComponent({
  name: 'Bookmarklet',
  components:{
    BookmarkletComponent
  },
  setup(){
    function copy(scriptText: string){
      void navigator.clipboard.writeText(scriptText).then(() => {
        alert('クリップボードにコピーしました');
      })
    }
    return {
      copy,
      BrowseNowText,
      SearchBooth,
      SearchFanza,
      OpenGiftPage,

    }
  }
})
</script>
