import React, { useState, useEffect } from 'react';
import styles from "./Form.module.css";

function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);

  // Function to generate a random alphanumeric string
  const generateRandomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Function to shorten the URL
  const shortenUrl = (originalUrl) => {
    const newShortenedUrl = generateRandomString(6);
    setShortenedUrl(newShortenedUrl);
    localStorage.setItem(newShortenedUrl, originalUrl);
    return newShortenedUrl;
  };

  // Function to display shortened URLs
  const displayShortenedUrls = () => {
    const urls = [];
    for (let i = 0; i < localStorage.length; i++) {
      const shortenedUrl = localStorage.key(i);
      const originalUrl = localStorage.getItem(shortenedUrl);
      urls.push({ shortenedUrl, originalUrl });
    }
    setShortenedUrls(urls);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (originalUrl.trim() !== '') {
      const newShortenedUrl = shortenUrl(originalUrl.trim());
      displayShortenedUrls();
      alert(`Shortened URL: ${window.location.href}${newShortenedUrl}`);
      setOriginalUrl('');
    } else {
      alert('Please enter a valid URL.');
    }
  };

  // Display existing shortened URLs on component mount
  useEffect(() => {
    displayShortenedUrls();
  }, []);

  return (
    <div className="formstyle">
      <form onSubmit={handleSubmit} className={styles.formstyle}>
        <div className={styles.textfieldContainer}>
          <input
            type="text"
            placeholder="Enter URL to shorten"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className={styles.textfieldStyle}
          />
          <button type="submit" className={styles.shortenButton}>Shorten</button>
        </div>
      </form>
      <div id="shortened-urls">
        {shortenedUrls.map(({ shortenedUrl, originalUrl }) => (
          <div key={shortenedUrl}>
            <a href={originalUrl}>{shortenedUrl}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UrlShortener;
