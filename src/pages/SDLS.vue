<template>
  <q-page padding>
    <!-- content -->
    <q-card flat>
      <q-card-section>
        <div class="text-h4">URL転送くん</div>
      </q-card-section>
      <q-card-section>
        <div v-if="isCreateMode">
          <div>DLsiteやCi-enに転送するリンクを（ある程度安全に）生成します。</div>
          <div>Twitterでシャドウバンなどを避ける目的で利用できます。</div>
          <q-input type="url" v-model="turl" label="URLを貼り付けてください" hint="https://www.dlsite.com/~~" @update:model-value="updateTurl()"></q-input>
          <q-card flat v-show="surl != ''">
            <q-card-section v-if="surl != 'deny'">
              リンクを生成しました!!<br/>
              <div><q-btn flat  icon="content_copy" @click="copy(surl)"></q-btn>{{ surl }}</div>
            </q-card-section>
            <q-card-section v-else>
              WARN: 許可されていないドメインです!!<br/>
            </q-card-section>
            
          </q-card>

          <div>※現在、URL転送くんで許可されている転送先のドメインは下記のみです。</div>
          <ul>
            <li v-for="domain in allowDomainList" :key="domain"> {{ domain }}</li>
          </ul>
        </div>
        <div v-else-if="isChecker">
          ４秒後に下記URLにアクセスします。<br>
          自動でアクセスしない場合はリンクをクリックして移動してください。
          <a :href="url">{{ url }}</a>
        </div>
        <div v-else>
          指定されたリンクはURLに問題があるか、ドメインがURLチェッカーに許可されていません。<br/>
          指定されたリンク：{{ url }} <br>
          このサービスでは以下のドメインのみリンクが許可されています。<br/>
          <ul>
            <li v-for="domain in allowDomainList" :key="domain"> {{ domain }}</li>
          </ul>
        </div>
        <BookmarkletComponent :Bookmarklet="SDLSBrowseNow" Title="DLsite転送くん(SDLS)" HeaderClass="text-h6">
          <template v-slot:description>
            URL転送くんを使ってDLsiteのリンクをシャドウバンから守るためのブックマークレットです。<br>
            BrowseNowと同様に見ているページのリンクを呟けます。<br>
            DLsiteへのリンクはmimica経由で転送するよう置換されます。<br>
          </template>
          <template v-slot:bml-field>
            <div>リンクをブックマークバーにドラッグ＆ドロップするかスクリプトをブックマークに登録ください。</div>
            <a :href="SDLSBrowseNow">SDLS</a>
            <q-field class="bml-field" stack-label label="">
              <template v-slot:control>
                <div class="full-width">
                  {{ SDLSBrowseNow }}
                </div>
              </template>
              <template v-slot:before>
                <q-btn flat icon="content_copy" @click="copy(SDLSBrowseNow)"></q-btn>
              </template>
            </q-field>
          </template>
        </BookmarkletComponent>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue';
import BookmarkletComponent from 'src/components/BookmarkletComponent.vue';
import SDLSBrowseNow from '!!raw-loader!./bookmarklet/SDLSBrowseNow.txt';
export default defineComponent({
  // name: 'PageName'
  props: {
    url: String
  },
  components:{
    BookmarkletComponent
  },
  setup(props){
    const isChecker = ref(false);
    const isAllowDomain = ref(false);
    const isCreateMode = ref(false);
    const turl = ref('');
    const surl = ref('');
    const allowDomainList = [
      'www.dlsite.com',
      'dlsite.com',
      'ci-en.net',
    ]
    function copy(scriptText: string){
      void navigator.clipboard.writeText(scriptText).then(() => {
        alert('クリップボードにコピーしました');
      })
    }
    if (props.url){
      const link = new URL(props.url);
      if (allowDomainList.includes(link.hostname)){
        isChecker.value = true;
        isAllowDomain.value = true;

      }
    }else{
      isCreateMode.value = true;
    }
    function updateTurl(){
      if (turl.value){
        let link = new URL(turl.value);
        if (allowDomainList.includes(link.hostname)){
          surl.value = 'https://mimica.iranika.info/#/sdls?link=' + turl.value
        }else{
          surl.value = 'deny'
        }
      }
    }
    onMounted(()=>{
      setTimeout(() => {
        if (props.url && isChecker.value){
          //openURL(props.url);
          location.href = props.url;
        }else{
          console.log('URLが異常です')
        }
      }, 4000);
    })
    return {
      isChecker,
      isAllowDomain,
      allowDomainList,
      isCreateMode,
      turl,
      surl,
      updateTurl,
      copy,
      SDLSBrowseNow,
    }
  }
})
</script>
