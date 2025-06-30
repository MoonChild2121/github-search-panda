import React from 'react';
import { sharedCard, cardAvatar, cardContent, cardTitle, cardDescription } from '../../../styled-system/recipes';

interface SharedUserCardProps {
  user: {
    id: string;
    name: string;
    avatar: string;
    bio?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const SharedUserCard: React.FC<SharedUserCardProps> = ({ 
  user, 
  size = 'md', 
  onClick 
}) => {
  return (
    <div 
      className={sharedCard({ variant: 'user', size })}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={cardAvatar({ size })}>
        <img 
          src={user.avatar} 
          alt={user.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className={cardContent()}>
        <h3 className={cardTitle({ size })}>{user.name}</h3>
        {user.bio && (
          <p className={cardDescription()}>{user.bio}</p>
        )}
      </div>
    </div>
  );
}; 