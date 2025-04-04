import { useState, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import styled from 'styled-components';

const Placeholder = styled.div`
  width: 100%;
  height: 315px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
`;

interface LazyYouTubeProps extends YouTubeProps {
  videoId: string;
}

export const LazyYouTube: React.FC<LazyYouTubeProps> = ({ videoId, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current; 
    if (!container) return; 

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container); 
      }
    };
  }, []); 

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <YouTube
          videoId={videoId}
          opts={{
            width: '100%',
            height: '315',
            playerVars: {
              autoplay: 0,
              controls: 1,
              modestbranding: 1,
              rel: 0,
            },
          }}
          {...props}
        />
      ) : (
        <Placeholder>Видео загружается...</Placeholder>
      )}
    </div>
  );
};