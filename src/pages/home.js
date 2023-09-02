import React, { useContext } from 'react';
import styles from './home.module.css';
import { StoriesContext } from '../components/authentification';
import Story from '../components/story'; // Import the Story component

export default function Home() {
  
  const { listStories } = useContext(StoriesContext);

  // Filter public stories and private stories (if authenticated)
  const publicStories = listStories.filter(story => story.status === 'public');
  

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>Welcome to our Daily Journal</h1>
      <p className={styles.subheading}>Get track of every moment of your life, create, explore, and discover amazing content.</p>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Public Stories</h2>
        <div className={styles.storyList}>
          {/* Render Story components for public stories */}
          {publicStories.map((story, index) => (
            <Story
              key={index}
              id={story.id}
              user={story.user}
              shortText={story.content.substring(0, 100)} // Display only the first 100 characters of content as shortText
              fullText={story.content}
              status={story.status}
            />
          ))}
        </div>
      </section>

      
    </div>
  );
}
