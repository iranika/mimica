import {reactive} from 'vue';
//import axios from 'axios';
/*
export class Hoge {
    private static 
}
*/

export class LocalstoregeStore {
    private static instance: LocalstoregeStore;
    
    private keys = {
        miniState: 'MiniState',
        defaultLocale: 'DefaultLocale'
    }

    public db = reactive({
        miniState: this.toBoolean(window.localStorage.getItem(this.keys.miniState) ?? 'false'),
        defaultLocale: String(window.localStorage.getItem(this.keys.defaultLocale) ?? 'ja-JP')
    })

    public toBoolean(boolstr: string): boolean{
        return boolstr.toLowerCase() === 'true';
    }


    public setMiniState(miniState: boolean){
        window.localStorage.setItem(this.keys.miniState, String(miniState))
        this.db.miniState = miniState 
    }
    public setDefaultLocale(locale: string){
        //Note: Locale will be change enum;
        window.localStorage.setItem(this.keys.defaultLocale, locale)
        this.db.defaultLocale = locale;
    }

    public updateStoreFromLocalstorage(){
        this.db.miniState = this.toBoolean(window.localStorage.getItem(this.keys.miniState) ?? 'false')
        this.db.defaultLocale = String(window.localStorage.getItem(this.keys.defaultLocale) ?? 'ja-JP')
    }

    public setAllLocalstorageFromStore(){
        window.localStorage.setItem(this.keys.miniState, String(this.db.miniState))
        window.localStorage.setItem(this.keys.defaultLocale, String(this.db.defaultLocale))
    }


    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(){}

    public static get getInstance():LocalstoregeStore{
        if (!this.instance){
            // eslint-disable-next-line @typescript-eslint/unbound-method
            this.instance = new LocalstoregeStore();
            console.log('miniState', this.instance.db.miniState)
            this.instance.setAllLocalstorageFromStore()
        }
        return this.instance;
    }


}

