import type { AxiosResponse } from 'axios';
import api from '@/api';
import type { PhotoAlbum } from './albums.model';

export const getPhotosFromAlbum = (albumId: number): Promise<AxiosResponse<PhotoAlbum[]>> => {
  return api.get(`/albums/${albumId}/photos`);
};
