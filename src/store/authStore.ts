import {reactive} from 'vue';
import createAuth0Client from '@auth0/auth0-spa-js';
import auth0Config from 'src/store/auth0Conf.json';

interface UserProfile{
    displayName: string,
    photoURL: string,
    isLogin: boolean
}

export class AuthStore {
    private static instance: AuthStore;

    public state = reactive(<UserProfile>{
        isLogin: false,
        displayName: '',
        photoURL: ''
    })

    public static getInstance():AuthStore{
        if (!this.instance){
            // eslint-disable-next-line @typescript-eslint/unbound-method
            this.instance = new AuthStore(AuthStore.getInstance);
        }
        return this.instance;
    }
    private Iauth0 = createAuth0Client(auth0Config);

    public async setAuth(){
        const auth0 = await this.Iauth0;
        if (await auth0.isAuthenticated()){
            const user = await auth0.getUser();
            this.state.isLogin = true;
            this.state.displayName = user?.name ?? 'nameless';
            this.state.photoURL = user?.picture ?? '/img/no_img.jpg';
        }else{
            this.state.isLogin = false
        }
    }
    public async signin(){
        const auth0 = await this.Iauth0;
        await auth0.loginWithPopup();
        await this.setAuth();
    }
    
    public signout(){
        //
    }

    constructor(caller: ()=>AuthStore){
        if (caller == AuthStore.getInstance){
            console.log('create instance of AuthStore');
            
            void this.setAuth().then(()=>{
                console.log(this.state)
            })
        }
        else if (AuthStore.instance){
            throw new Error('Already created instance of AuthStore. You should use AuthStore.getInstance().')
        }else{
            throw new Error('Constractor args valided illegal. You should use AuthStore.getInstance()')
        }
    }

}

