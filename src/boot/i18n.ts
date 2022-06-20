import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';
import { LocalstoregeStore} from 'src/store/localstrageStore';
import { I18n } from 'aws-amplify';


I18n.setLanguage(LocalstoregeStore.getInstance.db.defaultLocale);

const i18n = createI18n({
  locale: LocalstoregeStore.getInstance.db.defaultLocale,
  messages,
});


export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});

export { i18n };
