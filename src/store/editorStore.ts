import {reactive} from 'vue';
//import axios from 'axios';
/*
export class Hoge {
    private static 
}
*/

export class EditorStore {
    private static instance: EditorStore;
    
    private keys = {
        text: 'Text',
        setting: 'Setting'
    }

    public db = reactive({
        text: String(window.localStorage.getItem(this.keys.text) ?? this.getInitText() ),
        setting: String(window.localStorage.getItem(this.keys.setting) ?? '')
    })

    public toBoolean(boolstr: string): boolean{
        return boolstr.toLowerCase() === 'true';
    }

    public commitEditorStore(){
        window.localStorage.setItem(this.keys.text, this.db.text)
    }

    private getInitText(){
        return '@音響指示は＠を使います\n#演出は#を使います\nこんにちは。これはテストです。\nサンプルです。\n\n一行空けることで列を追加できます。\n空けないとこのように改行されます。\n#こんなふうにブロックの後ろにも記述できます';
    }

    public initEditorStore(){
        this.db.text = this.getInitText();
        //.localStorage.setItem(this.keys.text, this.db.text)
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(){}

    public static get getInstance():EditorStore{
        if (!this.instance){
            // eslint-disable-next-line @typescript-eslint/unbound-method
            this.instance = new EditorStore();
        }
        return this.instance;
    }


}

export function useEditorStore():EditorStore{
    return EditorStore.getInstance
}