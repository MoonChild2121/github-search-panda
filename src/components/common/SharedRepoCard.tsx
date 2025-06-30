import React from 'react';
import { sharedCard, cardContent, cardTitle, cardDescription, cardMeta, cardStars } from '../../../styled-system/recipes';

interface SharedRepoCardProps {
  repo: {
    id: string;
    name: string;
    description?: string;
    stars: number;
    language?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

// Simple Star icon component
const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const SharedRepoCard: React.FC<SharedRepoCardProps> = ({ 
  repo, 
  size = 'md', 
  onClick 
}) => {
  const formatStars = (stars: number) => {
    if (stars >= 1000) {
      return `${(stars / 1000).toFixed(1)}k`;
    }
    return stars.toString();
  };

  return (
    <div 
      className={sharedCard({ variant: 'repository', size })}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={cardContent()}>
        <h3 className={cardTitle({ size })}>{repo.name}</h3>
        {repo.description && (
          <p className={cardDescription()}>{repo.description}</p>
        )}
      </div>
      
      <div className={cardMeta()}>
        <div className={cardStars()}>
          <StarIcon />
          <span>{formatStars(repo.stars)}</span>
        </div>
        {repo.language && (
          <span>{repo.language}</span>
        )}
      </div>
    </div>
  );
}; 