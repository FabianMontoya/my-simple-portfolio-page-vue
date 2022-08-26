import type { Module } from 'vuex';
import type { State } from '@/store/index';
import type { PhotoAlbum } from '@/services/albums/albums.model';
import { getPhotosFromAlbum } from '@/services/albums';

export type PhotosAlbumState = {
  isLoading: boolean;
  albumId: number;
  photosAlbum: PhotoAlbum[] | null;
};

const photosAlbumModule: Module<PhotosAlbumState, State> = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    albumId: 1,
    photosAlbum: null
  }),
  mutations: {
    setPhotosAlbum: (state, payload: PhotoAlbum[]) => {
      state.photosAlbum = payload;
    },
    setAlbumId: (state, payload: number) => {
      state.albumId = payload;
    },
    setIsLoading: (state, isLoading: boolean) => {
      state.isLoading = isLoading;
    }
  },
  actions: {
    loadPhotosFromAlbum: async ({ commit }, albumId: number) => {
      commit('setIsLoading', true);

      Promise.resolve(getPhotosFromAlbum(albumId))
        .then(async ({ data }) => {
          console.log('loadPhotosFromAlbum', data);
          commit('setPhotosAlbum', data);
          commit('setAlbumId', albumId);
        })
        .catch((error) => {
          console.error('• Error getting photos from album: ', error);
        })
        .finally(() => commit('setIsLoading', false));
    },
    showLoading: ({ commit }) => commit('setIsLoading', true),
    hideLoading: ({ commit }) => commit('setIsLoading', false)
  }
};

export default photosAlbumModule;
