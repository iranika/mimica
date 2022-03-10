<template>
  <q-page>
    <q-card flat style="max-width:600px; margin-top: 10px;">
      <Authenticator>
        <template v-slot="{ user, signOut }">
          <div>Hello: {{ user.attributes.name }}!</div>
          <button @click="signOut">Sign Out</button>
        </template>
      </Authenticator>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DeckCard from 'components/DeckCard.vue'
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import { Amplify } from 'aws-amplify';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-vue';
I18n.putVocabularies(translations);
I18n.setLanguage('ja');

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

I18n.putVocabularies({
  ja: {
    'Name': 'お名前',
  },
});

export default defineComponent({
  name: 'signin',
  components: {
    //EssentialLink
    // eslint-disable-next-line vue/no-unused-components
    DeckCard,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Authenticator
  },
  setup(){
    return {
      
    }
  }
})

</script>
