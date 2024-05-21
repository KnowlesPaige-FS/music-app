// /* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import SideNavigation from '../components/SideNav';
import SearchBar from '../components/SearchBar';
import Circle from '../components/Circle';
import Cards from '../components/Cards';
import SmallCards from '../components/SmallCards';
import NowPlaying from '../components/NowPlaying';

function Albums() {
  return (
    <section style={styles.container}>
      <SideNavigation />
      <section style={styles.content}>
        <header style={styles.header}>
          <SearchBar />
        </header>
        <main style={styles.mainContent}>
          <section style={styles.popularArtists}>
            <h2>Popular Artists</h2>
            <div style={styles.artistList}>
              <Circle image="" title="" />
              <Circle image="" title="" />
              <Circle image="" title="" />
              <Circle image="" title="" />
              <Circle image="" title="" />
            </div>
          </section>
          <section style={styles.trendingNow}>
            <h2>Trending Now</h2>
            <div style={styles.trendingList}>
              <Cards img="" title="" />
              <Cards img="" title="Trending 2" />
              <Cards img="" title="" />
            </div>
          </section>
          <section style={styles.recentlyPlayed}>
            <h2>Recently Played</h2>
            <div style={styles.recentList}>
              <SmallCards img="" artistName="" songTitle=""  />
              <SmallCards img="" artistName="" songTitle=""  />
            </div>
          </section>
        </main>
        <aside style={styles.nowPlaying}>
          <NowPlaying songTitle="Song Title" artist="Artist Name" />
        </aside>
      </section>
    </section>
  );
}

export default Albums;

const styles = {
  container: {
    display: 'flex',
  },
  content: {
    
  },
  header: {
    
  },
  searchBar: {
    
  },
  mainContent: {
    
  },
  popularArtists: {
    
  },
  artistList: {
    
  },
  trendingNow: {
    
  },
  trendingList: {
    
  },
  recentlyPlayed: {
    
  },
  recentList: {
    
  },
  nowPlaying: {
   
  },
};