# ♟️ AI-Chess

An open-source, local-first chess analysis platform and personalized mistake curriculum powered by **Stockfish WebAssembly** and **AI Game Reviews**.

---

## 🌟 Key Features

### 1. 🔍 Deep Engine Analysis & Live Board
- **In-Browser Stockfish Engines**: Multiple engine options (Stockfish 11 through Stockfish 18) running 100% client-side via Web Workers and WebAssembly (WASM).
- **MultiPV & Evaluation Graph**: Multi-line analysis, centipawn & win percentage evaluation graph, and instant blunder/mistake classification.
- **PGN & Platform Import**: Easily paste PGNs, load FEN positions, or import games directly from **Lichess** and **Chess.com**.

### 2. 🎓 Recurring Pattern Training & Mistake Curriculum (`/curriculum`)
- **Factual Chess Geometry Analysis**: Discovers repeating weaknesses across your saved game history without guesswork or fabricated coaching tips.
- **Strict Player Perspective**: Analyzes moves exclusively for the user (opponent mistakes and blunders are strictly excluded). Dynamically identifies player color for both White and Black across games.
- **Evidence-Based Themes**:
  - ⚔️ **Tactics**: Missed pins, forks, skewers, and tactical opportunities.
  - 🛡️ **King Safety**: Weakened pawn shields, exposed kings, and missed castling windows.
  - 📖 **Opening Traps**: Early tactical mistakes and uncoordinated piece development.
  - 🏁 **Endgame Technique**: Conversion slips, king passivity, and passed pawn mishandling.
  - 🔒 **Piece Activity**: Trapped pieces, restricted mobility, and out-of-play units.
  - ⚡ **Back-Rank Issues**: Heavy-piece threats and absent *luft* escape squares.
- **Cross-Game Coaching Analytics**:
  - Game phase distribution (Opening vs Middlegame vs Endgame).
  - Tactical vs Positional mistake ratio.
  - Error severity breakdown (Blunders, Mistakes, Inaccuracies).
  - Fact-based summary of your strengths and key weaknesses across games.

### 3. 🎯 Origin-Aware Practice Mode
- **Interactive Drills**: Practice exact positions from your previous games where critical mistakes occurred.
- **Theme Drill Queues**: Train an entire recurring theme sequentially through multiple saved game moments.
- **Origin-Aware Navigation**: When practicing from the Curriculum, exiting or finishing drills seamlessly returns you to `/curriculum` with your username, filters, and patterns preserved.

### 4. 🤖 AI Game Review (Powered by Google Gemini)
- Master-level coaching narrative explaining the story of the game, critical turning points, and actionable takeaways.
- Move classification: *Brilliant, Great, Best, Excellent, Good, Book, Inaccuracy, Mistake, Miss, and Blunder*.

### 5. 🔒 Local-First & Privacy Focused
- Games and evaluations are stored locally in the browser's **IndexedDB**.
- No account registration, login, or external database (MongoDB/Postgres) required.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router) & [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Jotai](https://jotai.org/)
- **UI Components**: [Material-UI (MUI v6)](https://mui.com/), [Emotion](https://emotion.sh/), and [Iconify](https://iconify.design/)
- **Chess Engine & Logic**: [chess.js](https://github.com/jhlywa/chess.js), [react-chessboard](https://github.com/Clariity/react-chessboard), Stockfish (WASM/Web Worker)
- **Local Storage**: [idb](https://github.com/jakearchibald/idb) (IndexedDB wrapper)
- **AI Integration**: [@google/genai](https://github.com/google/generative-ai-js) (Google Gemini SDK)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18+ or v20+ recommended)
- Package manager: [pnpm](https://pnpm.io/) (recommended) or `npm`

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-CHess.git
cd AI-CHess
```

### 2. Install Dependencies

Using **pnpm**:
```bash
pnpm install
```

*(Or using **npm**)*:
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Required for AI Game Review feature
GEMINI_API_KEY=your_google_gemini_api_key_here

# Optional: Custom model selection (defaults to gemini-3.5-flash)
GEMINI_MODEL=gemini-3.5-flash
```

> [!NOTE]
> You can obtain a free Gemini API key from [Google AI Studio](https://aistudio.google.com/). Board analysis, Stockfish evaluation, and Recurring Mistake Curriculum work completely offline without an API key.

### 4. Run the Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server. |
| `pnpm build` | Builds the application for production. |
| `pnpm start` | Starts the production server. |
| `pnpm lint` | Runs ESLint and TypeScript compiler type-check (`tsc --noEmit`). |

---

## ☁️ Deployment (Vercel)

This project is optimized for deployment on **[Vercel](https://vercel.com/)**:

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. In **Project Settings → Environment Variables**, add:
   - `GEMINI_API_KEY`: Your Google Gemini API key.
4. Click **Deploy**.

The Stockfish WASM engines are served via Vercel's global Edge CDN with permanent caching headers, and the AI Game Review runs as a serverless API function.

---

## 📄 License

This project is open-source and available under the [GPL-3.0 License](LICENSE).