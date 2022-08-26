import type { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import photosAlbumModule from './modules/albums';
import type { PhotosAlbumState } from './modules/albums';

export type State = {
  photosAlbum: PhotosAlbumState;
};
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  strict: true,
  modules: {
    photosAlbum: photosAlbumModule
  }
});

export const useStore = (): Store<State> => baseUseStore(key);
