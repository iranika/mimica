import {reactive} from 'vue';
import firebase from '../firebase/firebase';
import { getAuth, updateProfile, onAuthStateChanged, User, TwitterAuthProvider, signInWithRedirect } from 'firebase/auth';
//import Component from 'vue-class-component';

interface UserProfile{
    displayName: string,
    photoURL: string,
    isLogin: boolean
}


export class AuthStore {
    private static instance: AuthStore;

    public state = reactive({
        isLoggedin: false,
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
    public signin(){
        const provider = new TwitterAuthProvider();
        const auth = getAuth(firebase);
        void signInWithRedirect(auth, provider).then(result => {
            console.log('signin', result);
        })
    }
    public signout(){
        void getAuth(firebase).signOut();
    }
    public setUser(user: UserProfile | User){
        this.state.isLoggedin = !!user;
        if (user){
            this.state.displayName = user.displayName ?? ''
            this.state.photoURL = user.photoURL ?? ''    
        }
        console.log(user)
    }
    public updateUser(user: UserProfile){
        const auth = getAuth(firebase);
        if (auth.currentUser != null){
            void updateProfile(auth.currentUser, user).then(()=>{
                this.setUser(user)
            })
        }
    }

    constructor(caller: ()=>AuthStore){
        if (caller == AuthStore.getInstance){
            console.log('create instance of AuthStore');
            const auth = getAuth(firebase);
            onAuthStateChanged(auth, user=> {
                if (user != null){
                    this.setUser(user);
                }
            });
        }
        else if (AuthStore.instance){
            throw new Error('Already created instance of AuthStore. You should use AuthStore.getInstance().')
        }else{
            throw new Error('Constractor args valided illegal. You should use AuthStore.getInstance()')
        }
    }

}

