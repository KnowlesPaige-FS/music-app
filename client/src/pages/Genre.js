// /* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import SideNavigation from '../components/SideNav';
import SearchBar from '../components/SearchBar';
import Circle from '../components/Circle';
import Cards from '../components/Cards';
import NowPlaying from '../components/NowPlaying';


function Genre({ onLogout }) {
  return (
    <section style={styles.container}>
      <SideNavigation onLogout={onLogout} />
      <section style={styles.content}>
        <header style={styles.header}>
          <SearchBar />
        </header>
        <main style={styles.mainContent}>
          <section style={styles.popularGenres}>
            <h5>Popular Genres</h5>
            <div style={styles.genreList}>
              <Circle image="" title="" />
              <Circle image="" title="" />
              <Circle image="" title="" />
              <Circle image="" title="" />
              <Circle image="" title="" />
              <Circle image="" title="" />
            </div>
          </section>
          <section style={styles.trendingNow}>
            <h5>Trending Now</h5>
            <div style={styles.trendingList}>
              <Cards img="" title="" />
              <Cards img="" title="Trending 2" />
              <Cards img="" title="" />
            </div>
          </section>
        </main>
      </section>
      <aside style={styles.nowPlaying}>
        <NowPlaying songTitle="Song Title" artist="Artist Name" />
      </aside>
    </section>
  );
}

export default Genre;

const styles = {
  container: {
    display: 'flex',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  searchBar: {
    width: '300px',
    padding: '10px',
    border: '1px solid #DDD',
    borderRadius: '5px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  popularGenres: {
    marginBottom: '30px',
  },
  genreList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  trendingNow: {
    marginBottom: '30px',
  },
  trendingList: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  nowPlaying: {
    marginTop: '10%',
    marginRight: '2%'
  },
};