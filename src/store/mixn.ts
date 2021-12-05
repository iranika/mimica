import {reactive} from 'vue';
import axios from 'axios';

const AppsScriptUrl =
    'https://script.google.com/macros/s/AKfycbzaYgyHW2uNU43guzrP74W1rLQJxnx3N2Le1FLgPKjSmKQ_inIqDXvMHrM1UoT08O4nMQ/exec';


export interface SpreadSheetInfo{
    No: string,
    Title: string,
    Link: string
}


export class MixnStore {
    private static instance: MixnStore;

    public db = reactive({
        titles: <Array<SpreadSheetInfo>>[]
    })

    public static getInstance():MixnStore{
        if (!this.instance){
            // eslint-disable-next-line @typescript-eslint/unbound-method
            this.instance = new MixnStore(MixnStore.getInstance);
        }
        return this.instance;
    }
    public syncSpreadSheet() {
        void axios.get<Array<SpreadSheetInfo>>(AppsScriptUrl).then(res => {
            console.log(res.data)
            this.db.titles = res.data;
        });
    }
    constructor(caller: ()=>MixnStore){
        if (caller == MixnStore.getInstance){
            console.log('create instance of MixnStore');
            this.syncSpreadSheet();
        }
        else if (MixnStore.instance){
            throw new Error('Already created instance of MixnStore. You should use MixnStore.getInstance().')
        }else{
            throw new Error('Constractor args valided illegal. You should use MixnStore.getInstance()')
        }
    }

}

