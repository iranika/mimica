import {reactive} from 'vue';
//import Component from 'vue-class-component';

export class AuthCognitoStore {
    private static instance: AuthCognitoStore;

    public state = reactive({
        isLoggedin: false,
        displayName: '',
        photoURL: ''
    })
    public static getInstance():AuthCognitoStore{
        if (!this.instance){
            // eslint-disable-next-line @typescript-eslint/unbound-method
            this.instance = new AuthCognitoStore(AuthCognitoStore.getInstance);
        }
        return this.instance;
    }
    
    constructor(caller: ()=>AuthCognitoStore){
        if (caller == AuthCognitoStore.getInstance){
            console.log('create instance of AuthCognitoStore');
        }
        else if (AuthCognitoStore.instance){
            throw new Error('Already created instance of AuthCognitoStore. You should use AuthCognitoStore.getInstance().')
        }else{
            throw new Error('Constractor args valided illegal. You should use AuthCognitoStore.getInstance()')
        }
    }

}

