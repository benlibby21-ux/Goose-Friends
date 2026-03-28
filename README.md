# 🪿 Goose & Friends — Feelings Helper

A toddler-friendly emotional regulation app built with React. Designed to help little ones (and their parents) navigate big feelings through guided activities with a cute animal buddy.

## Features

- **4 emotions**: Angry, Sad, Scared, Happy
- **Custom SVG animals**: Bear, Bunny, Kitty, Puppy, Duck, Owl — each with emotion-specific expressions and idle animations
- **Guided calming activities**:
  - **Angry**: Choose between Smell Flowers (breathing), Squeeze & Release, or Count to Five
  - **Sad**: Validate feelings → share something happy → hug the buddy
  - **Scared**: Grounding exercise — find familiar objects around you
  - **Happy**: Celebration!
- **Voice recording**: Record your own voice for every prompt so your child hears you
- **Audio slot system**: Drop in MP3 files for pre-recorded voices
- **Parent dashboard**: Track emotion frequency, time-of-day patterns, and recent check-ins
- **PWA support**: Install on your phone's home screen like a native app

## Deploy to Vercel (5 minutes)

### Option A: Vercel CLI

```bash
# Install Vercel CLI if you don't have it
npm i -g vercel

# From the project folder:
npm install
vercel
```

Follow the prompts — it will deploy and give you a URL.

### Option B: GitHub + Vercel (recommended)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign up (free)
3. Click "Import Project" → select your repo
4. Framework: **Vite** (it should auto-detect)
5. Click Deploy

That's it! You'll get a URL like `goose-and-friends.vercel.app`.

## Add to Your Phone's Home Screen

### iPhone (Safari):
1. Open your Vercel URL in Safari
2. Tap the **Share** button (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "Goose & Friends" and tap Add

### Android (Chrome):
1. Open your Vercel URL in Chrome
2. Tap the **three dots** menu
3. Tap **"Add to Home Screen"** or **"Install App"**

The app will launch fullscreen like a native app!

## App Icons

The `public/` folder includes a basic SVG icon. For a polished look, replace `icon-192.png` and `icon-512.png` with your own PNG icons at those sizes. You can use a tool like [realfavicongenerator.net](https://realfavicongenerator.net) to generate all sizes from a single image.

## Adding Pre-recorded Audio

1. Create an `audio/` folder in `public/`
2. Add MP3 files named by prompt ID (e.g., `angry_intro.mp3`, `sad_validate.mp3`)
3. In `src/App.jsx`, change `USE_PRE = false` to `USE_PRE = true`
4. Change `AUDIO_URL` to `"/audio/"` (for Vite, files in `public/` are served at root)

### Full list of audio prompt IDs:

**Angry (shared):** `angry_intro`, `angry_done`
**Angry — Breathing:** `angry_smell1`, `angry_blow1`, `angry_smell2`, `angry_blow2`, `angry_smell3`, `angry_blow3`
**Angry — Squeeze:** `angry_sq_intro`, `angry_sq1`, `angry_rel1`, `angry_sq2`, `angry_rel2`
**Angry — Counting:** `angry_count_intro`, `angry_count1`, `angry_count2`, `angry_count3`, `angry_count4`, `angry_count5`
**Sad:** `sad_intro`, `sad_validate`, `sad_happy`, `sad_hug_ask`, `sad_hugging`, `sad_done`
**Scared:** `scared_intro`, `scared_find`, `scared_done`
**Happy:** `happy_intro`, `happy_done`

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Tech Stack

- React 18
- Vite
- Hand-drawn SVG animals (no external assets)
- Web Speech API (TTS fallback)
- MediaRecorder API (voice recording)
- localStorage (data persistence)
