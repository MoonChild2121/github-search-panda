# GitHub Search with Tokens

A modern React application for searching GitHub users and repositories with a clean, responsive interface and dark mode support.

## 🌟 Features

- **GitHub Search Integration**
  - Search for users and repositories
  - Real-time search results
  - Detailed user and repository cards
  - Star counts and language information for repositories

- **Modern UI/UX**
  - Responsive design (mobile, tablet, desktop)
  - Dark/Light theme support
  - Clean and accessible interface
  - Loading and error states
  - Smooth transitions and hover effects

- **Technical Features**
  - Type-safe with TypeScript
  - Redux state management with persistence
  - Panda CSS for styling
  - Component-based architecture
  - Debounced search for performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)
- GitHub Personal Access Token

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/github-with-tokens.git
cd github-with-tokens
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory:
```env
VITE_PERSONAL_TOKEN=your_github_personal_access_token
```

4. Start the development server:
```bash
pnpm dev
```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Redux Toolkit](https://redux-toolkit.js.org/) - State Management
- [Panda CSS](https://panda-css.com/) - Styling
- [Vite](https://vitejs.dev/) - Build Tool

## 🎨 Design System

### Color Tokens

- **Surface Colors**
  - `surface.base` - Main backgrounds
  - `surface.elevated` - Elevated elements
  - `surface.subtle` - Subtle backgrounds
  - `surface.overlay` - Overlay elements

- **Content Colors**
  - `content.primary` - Main text
  - `content.secondary` - Secondary text
  - `content.tertiary` - Metadata
  - `content.placeholder` - Placeholder text

- **Interactive Colors**
  - `interactive.primary` - Primary actions
  - `interactive.hover` - Hover states
  - `interactive.active` - Active states

### Components

- **Cards**
  - User cards with avatar and bio
  - Repository cards with description and stats
  - Responsive sizing (sm, md, lg)

- **Form Controls**
  - Input fields
  - Select dropdowns
  - Search bar

## 🔍 Usage

1. Select search type (Users/Repositories)
2. Type your search query
3. Results will appear automatically
4. Click on any card to visit the GitHub page

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GitHub API for providing the data
- Panda CSS for the styling system
- The React community for awesome tools and libraries
