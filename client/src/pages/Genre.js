// /* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import SideNavigation from '../components/SideNav';
import SearchBar from '../components/SearchBar';
import Circle from '../components/Circle';
import Cards from '../components/Cards';
import NowPlaying from '../components/NowPlaying';


function Genre() {
  return (
    <section style={styles.container}>
      <SideNavigation />
      <section style={styles.content}>
        <header style={styles.header}>
          <SearchBar />
          {/* <input type="text" placeholder="What do you want to listen to today?" style={styles.searchBar} /> */}
        </header>
        <main style={styles.mainContent}>
          <section style={styles.popularGenres}>
            <h2>Popular Genres</h2>
            <div style={styles.genreList}>
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
        </main>
        <aside style={styles.nowPlaying}>
          <NowPlaying songTitle="Song Title" artist="Artist Name" />
        </aside>
      </section>
    </section>
  );
}

export default Genre;

const styles = {
  container: {
    display: 'flex' 
  },
  content: {
    
  },
  header: {
    
  },
  searchBar: {
    
  },
  mainContent: {
   
  },
  popularGenres: {
    
  },
  genreList: {
    
  },
  trendingNow: {
    
  },
  trendingList: {
    
  },
  nowPlaying: {
    
  },
};