import { albums, ALBUMS_LOAD, ALBUM_ADD } from './reducers';

describe('Album reducers', () => {

  it('returns empty array for default state', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

});