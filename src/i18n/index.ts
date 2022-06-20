import enUS from './en-US';
import ja from './ja';
import i18n from 'src/boot/i18n';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-vue';

//Amplify用のi18n設定
I18n.putVocabularies(translations);
I18n.putVocabularies({
  ja: {
    'Name': 'ハンドルネーム'
  },
})

//Vueのi18n設定
export default {
  'en-US': enUS,
  'ja-JP': ja
};
