import { grid } from '../../../styled-system/patterns';
import { css } from '../../../styled-system/css';
import { useSelector } from 'react-redux';
import { textStyles } from '../../theme/text-styles';
import type { AppState } from '../../store';

interface UserData {
  id: string;
  login: string;
  avatar_url: string;
  bio?: string;
}

interface RepoData {
  id: string;
  name: string;
  description?: string;
  stargazers_count: number;
  language?: string;
}

export const CardGrid = () => {
  const { lastResults, lastEntity, loading, error, lastQuery } = useSelector((state: AppState) => state.github);

  const gridStyles = grid({
    maxW: 'container.xl',
    w: 'full',
    px: 4,
    gap: 4,
    gridTemplateColumns: {
      base: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)'
    },
    justifyItems: 'stretch'
  });

  const messageStyles = css(textStyles.emptyMessage.value);

  if (loading) {
    return <div className={messageStyles}>Loading...</div>;
  }

  if (error) {
    return <div className={messageStyles}>Error: {error}</div>;
  }

  if (!lastQuery.trim()) {
    return (
      <div className={messageStyles}>
      </div>
    );
  }

  if (!lastResults || lastResults.length === 0) {
    return <div className={messageStyles}>No results found for "{lastQuery}"</div>;
  }

  if (lastEntity === 'user') {
    return (
      <div className={gridStyles}>
        {lastResults.map((user: UserData) => (
          <div 
            key={user.id}
            className="shared-card shared-card--size_md shared-card--variant_user"
            onClick={() => window.open(`https://github.com/${user.login}`, '_blank')}
            role="button"
            tabIndex={0}
          >
            <div className="card-avatar card-avatar--size_md">
              <img 
                src={user.avatar_url} 
                alt={user.login}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title card-title--size_md">{user.login}</h3>
              {user.bio && (
                <p className="card-description">{user.bio}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={gridStyles}>
      {lastResults.map((repo: RepoData) => (
        <div 
          key={repo.id}
          className="shared-card shared-card--size_md shared-card--variant_repository"
          onClick={() => window.open(`https://github.com/${repo.name}`, '_blank')}
          role="button"
          tabIndex={0}
        >
          <div className="card-content">
            <h3 className="card-title card-title--size_md">{repo.name}</h3>
            {repo.description && (
              <p className="card-description">{repo.description}</p>
            )}
          </div>
          <div className="card-meta">
            <div className="card-stars">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>{repo.stargazers_count.toLocaleString()}</span>
            </div>
            {repo.language && (
              <span>{repo.language}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};