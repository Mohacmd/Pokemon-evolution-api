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
