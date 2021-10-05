import { inject, InjectionKey, reactive } from 'vue';

type DummyUser = {
  displayName: string;
  photoURL: string;
}

const dummyUser: DummyUser = {
  displayName: 'test',
  photoURL: 'https://pbs.twimg.com/profile_images/1308010958862905345/-SGZioPb_400x400.jpg'
}

const authStore = () => {
  console.log('init authStore')
  const state = reactive({ isLoggedin: false, displayName: '', photoURL: ''})
  const setUser = (user: DummyUser | null) => {
    state.isLoggedin = !!user
    if (user) {
      state.displayName = user.displayName ?? ''
      state.photoURL = user.photoURL ?? ''
    }
  }
  const signin = () => {
    setUser(dummyUser)
  }
  const signout = () => setUser(null)
  const updateUser = (input: DummyUser) => {
    setUser(input)
  }

  return {
    state,
    setUser,
    signin,
    signout,
    updateUser,
  };
}

export default authStore

export type AuthStore = ReturnType<typeof authStore>;

export const authStoreKey: InjectionKey<AuthStore> = Symbol('authStore');

export const useAuthStore = () => {
  const store = inject(authStoreKey);
  if (!store) {
    throw new Error('authstore is not provided');
  }
  return store;
}