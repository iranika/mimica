import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar'

import messages from 'src/i18n';

export const langKey = 'DefaultLanguage';

const defaultLang = LocalStorage.has(langKey) ? 
  <string>localStorage.getItem(langKey) 
  : 'ja-JP';

console.log(defaultLang)
const i18n = createI18n({
  locale: defaultLang,
  messages,
});


export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});

export { i18n };
