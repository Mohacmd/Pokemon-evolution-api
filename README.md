# 🎮 Pokemon Evolution API

A beautiful, interactive RESTful API for Pokemon evolution data featuring **Gengar**, **Mimikyu**, **Charmander**, **Pikachu**, and **Jigglypuff**. Includes a stunning web interface with evolution chain visualization and images for each stage.

![Pokemon Evolution API](https://img.shields.io/badge/Pokemon-Evolution%20API-FF6B6B?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

## ✨ Features

- 🎨 **Beautiful Interactive UI** - Click any Pokemon to see their evolution chain with images
- 📊 **Complete Evolution Data** - Levels, stones, methods, and notes for each evolution
- 🖼️ **Evolution Images** - Sprite images for every evolution stage
- 🔌 **RESTful API** - Clean JSON endpoints for all Pokemon data
- ⚡ **Fast & Lightweight** - Built with Express.js
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/pokemon-evolution-api.git

# Navigate to project folder
cd pokemon-evolution-api

# Install dependencies
npm install

# Start the server
npm start
```

Visit `http://localhost:3000` in your browser!

## 📋 Pokemon Included

| Pokemon | Evolution Chain | Stone Required |
|---------|----------------|----------------|
| **Gengar** | Gastly → Haunter (Lv.25) → Gengar (Trade) | ❌ No |
| **Mimikyu** | Does not evolve | ❌ No |
| **Charmander** | Charmander → Charmeleon (Lv.16) → Charizard (Lv.36) | ❌ No |
| **Pikachu** | Pichu (Friendship) → Pikachu → Raichu (Thunder Stone) | ⚡ Thunder Stone |
| **Jigglypuff** | Igglybuff (Friendship) → Jigglypuff → Wigglytuff (Moon Stone) | 🌙 Moon Stone |

## 🔌 API Endpoints

### Get All Pokemon
```
GET /api/evolutions
```

### Get Specific Pokemon
```
GET /api/evolution/:name
```
Available: `gengar`, `mimikyu`, `charmander`, `pikachu`, `jigglypuff`

### Get Evolution Chain
```
GET /api/evolution/:name/chain
```

### Check Stone Requirements
```
GET /api/evolution/:name/stone
```

### Get All Evolution Stones
```
GET /api/stones
```

### Get Specific Stone
```
GET /api/stones/:stoneName
```
Available: `fire`, `thunder`, `moon`, `water`, `leaf`

## 📖 Example Response

```json
{
  "success": true,
  "data": {
    "name": "Pikachu",
    "pokedexNumber": 25,
    "types": ["Electric"],
    "evolutionChain": [
      {
        "stage": 1,
        "name": "Pichu",
        "pokedexNumber": 172,
        "method": "Base form (baby Pokemon)",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
      },
      {
        "stage": 2,
        "name": "Pikachu",
        "pokedexNumber": 25,
        "method": "High Friendship",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      },
      {
        "stage": 3,
        "name": "Raichu",
        "pokedexNumber": 26,
        "method": "Thunder Stone",
        "stone": "Thunder Stone",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
      }
    ]
  }
}
```

## 🌐 Hosting Options

### Option 1: Render (Recommended - FREE & Easy)

1. **Create a Render account**: https://render.com/
2. **Click "New +"** → **"Web Service"**
3. **Connect your GitHub repository**
4. **Configure:**
   - **Name**: `pokemon-evolution-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. **Click "Create Web Service"**
6. Your API will be live at: `https://pokemon-evolution-api.onrender.com`

**Note:** Free tier sleeps after 15 min of inactivity - first request may be slow.

### Option 2: Railway (FREE with GitHub Student)

1. **Sign up**: https://railway.app/
2. **New Project** → **Deploy from GitHub repo**
3. **Select your repository**
4. **Railway auto-detects Node.js** - just deploy!
5. **Live at**: `https://your-app.up.railway.app`

### Option 3: Vercel (FREE)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```
2. **Deploy**:
   ```bash
   vercel
   ```
3. **Follow prompts** - live in seconds!

### Option 4: Heroku (Paid but Reliable)

1. **Create Heroku account**: https://heroku.com
2. **Create new app** in dashboard
3. **Connect to GitHub** and select your repo
4. **Enable automatic deploys**
5. **Deploy!**

## 📁 Project Structure

```
pokemon-evolution-api/
├── index.html                  # Interactive web interface
├── pokemon-evolution-api.js    # Express API server
├── package.json                # Dependencies
├── README.md                   # This file
└── .gitignore                  # Git ignore file
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3 (Custom design), Vanilla JavaScript
- **Fonts**: Google Fonts (Archivo Black, DM Sans)
- **Sprites**: PokeAPI GitHub Repository

## 📝 License

MIT License - feel free to use this project however you'd like!

## 🙏 Credits

- **Pokemon Sprites**: [PokeAPI](https://pokeapi.co/)
- **Evolution Data**: Compiled from official Pokemon games and databases
- **Design**: Custom design with modern web aesthetics

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more Pokemon
- Improve the UI
- Add new features
- Fix bugs

## 📧 Contact

Feel free to reach out if you have questions or suggestions!

---

**Made with ❤️ for Pokemon fans**
