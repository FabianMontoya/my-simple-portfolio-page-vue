export type AlbumsData = {
  data: PhotoAlbum[];
};

export type PhotoAlbum = {
  album_id: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
