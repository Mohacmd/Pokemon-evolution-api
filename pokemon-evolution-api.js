const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Pokemon Evolution Data
const pokemonEvolutionData = {
  gengar: {
    name: "Gengar",
    pokedexNumber: 94,
    types: ["Ghost", "Poison"],
    evolutionChain: [
      {
        stage: 1,
        name: "Gastly",
        pokedexNumber: 92,
        level: 1,
        method: "Base form",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
      },
      {
        stage: 2,
        name: "Haunter",
        pokedexNumber: 93,
        level: 25,
        method: "Level up",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
      },
      {
        stage: 3,
        name: "Gengar",
        pokedexNumber: 94,
        level: null,
        method: "Trade",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        note: "Must trade Haunter with another player to evolve into Gengar"
      }
    ],
    description: "Gengar evolves from Haunter through trading. The evolution chain starts with Gastly, evolves to Haunter at level 25, then requires trading to become Gengar.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  
  mimikyu: {
    name: "Mimikyu",
    pokedexNumber: 778,
    types: ["Ghost", "Fairy"],
    evolutionChain: [
      {
        stage: 1,
        name: "Mimikyu",
        pokedexNumber: 778,
        level: 1,
        method: "Does not evolve",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png"
      }
    ],
    description: "Mimikyu does not evolve into or from any other Pokémon. It is a standalone Pokémon introduced in Generation 7.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    note: "Mimikyu is a single-stage Pokemon with no evolutions"
  },
  
  charmander: {
    name: "Charmander",
    pokedexNumber: 4,
    types: ["Fire"],
    evolutionChain: [
      {
        stage: 1,
        name: "Charmander",
        pokedexNumber: 4,
        level: 1,
        method: "Base form",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        stage: 2,
        name: "Charmeleon",
        pokedexNumber: 5,
        level: 16,
        method: "Level up",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
      },
      {
        stage: 3,
        name: "Charizard",
        pokedexNumber: 6,
        level: 36,
        method: "Level up",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        note: "Gains Flying type upon evolution"
      }
    ],
    description: "Charmander evolves into Charmeleon at level 16, then into Charizard at level 36. Does NOT use Fire Stone - evolution is purely level-based.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    megaEvolution: {
      available: true,
      forms: ["Mega Charizard X", "Mega Charizard Y"],
      stones: ["Charizardite X", "Charizardite Y"]
    }
  },
  
  pikachu: {
    name: "Pikachu",
    pokedexNumber: 25,
    types: ["Electric"],
    evolutionChain: [
      {
        stage: 1,
        name: "Pichu",
        pokedexNumber: 172,
        level: 1,
        method: "Base form (baby Pokemon)",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
      },
      {
        stage: 2,
        name: "Pikachu",
        pokedexNumber: 25,
        level: null,
        method: "High Friendship",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        note: "Pichu evolves into Pikachu when leveled up with high friendship"
      },
      {
        stage: 3,
        name: "Raichu",
        pokedexNumber: 26,
        level: null,
        method: "Thunder Stone",
        stone: "Thunder Stone",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        note: "Use Thunder Stone on Pikachu to evolve into Raichu (no level requirement)"
      }
    ],
    description: "Pikachu evolves from Pichu through friendship, then evolves into Raichu when exposed to a Thunder Stone. The Thunder Stone can be used at any level.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    regionalForms: {
      available: true,
      forms: ["Alolan Raichu (Electric/Psychic)"],
      note: "In Alola region, Pikachu evolves into Alolan Raichu using Thunder Stone"
    }
  },
  
  jigglypuff: {
    name: "Jigglypuff",
    pokedexNumber: 39,
    types: ["Normal", "Fairy"],
    evolutionChain: [
      {
        stage: 1,
        name: "Igglybuff",
        pokedexNumber: 174,
        level: 1,
        method: "Base form (baby Pokemon)",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png"
      },
      {
        stage: 2,
        name: "Jigglypuff",
        pokedexNumber: 39,
        level: null,
        method: "High Friendship",
        stone: null,
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        note: "Igglybuff evolves into Jigglypuff when leveled up with high friendship"
      },
      {
        stage: 3,
        name: "Wigglytuff",
        pokedexNumber: 40,
        level: null,
        method: "Moon Stone",
        stone: "Moon Stone",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        note: "Use Moon Stone on Jigglypuff to evolve into Wigglytuff (no level requirement)"
      }
    ],
    description: "Jigglypuff evolves from Igglybuff through friendship, then evolves into Wigglytuff when exposed to a Moon Stone. Known as the Balloon Pokemon for its ability to sing lullabies.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    specialAbility: {
      name: "Sing",
      description: "Jigglypuff is famous for its song that puts opponents to sleep"
    }
  }
};

// Evolution Stones Reference
const evolutionStones = {
  fireStone: {
    name: "Fire Stone",
    description: "A peculiar stone that can make certain species of Pokémon evolve.",
    compatiblePokemon: [
      "Vulpix → Ninetales",
      "Growlithe → Arcanine",
      "Eevee → Flareon",
      "Pansear → Simisear",
      "Capsakid → Scovillain"
    ],
    notCompatible: ["Charmander", "Charmeleon", "Gengar", "Mimikyu", "Pikachu", "Jigglypuff"]
  },
  thunderStone: {
    name: "Thunder Stone",
    compatiblePokemon: ["Pikachu → Raichu", "Eevee → Jolteon", "Magneton → Magnezone"],
    description: "A peculiar stone that can make certain species of Pokémon evolve."
  },
  moonStone: {
    name: "Moon Stone",
    compatiblePokemon: ["Jigglypuff → Wigglytuff", "Nidorina → Nidoqueen", "Nidorino → Nidoking", "Clefairy → Clefable"],
    description: "A peculiar stone that can make certain species of Pokémon evolve."
  },
  waterStone: {
    name: "Water Stone",
    compatiblePokemon: ["Poliwhirl → Poliwrath", "Shellder → Cloyster", "Eevee → Vaporeon"]
  },
  leafStone: {
    name: "Leaf Stone",
    compatiblePokemon: ["Gloom → Vileplume", "Weepinbell → Victreebel", "Eevee → Leafeon"]
  }
};

// API Endpoints

// Get all Pokemon evolution data
app.get('/api/evolutions', (req, res) => {
  console.log('GET /api/evolutions - Fetching all Pokemon data');
  res.json({
    success: true,
    data: pokemonEvolutionData,
    count: Object.keys(pokemonEvolutionData).length
  });
});

// Get specific Pokemon evolution by name
app.get('/api/evolution/:name', (req, res) => {
  const pokemonName = req.params.name.toLowerCase();
  console.log(`GET /api/evolution/${pokemonName}`);
  const evolution = pokemonEvolutionData[pokemonName];
  
  if (!evolution) {
    return res.status(404).json({
      success: false,
      error: `Pokemon '${pokemonName}' not found. Available: gengar, mimikyu, charmander, pikachu, jigglypuff`
    });
  }
  
  res.json({
    success: true,
    data: evolution
  });
});

// Get evolution stones information
app.get('/api/stones', (req, res) => {
  res.json({
    success: true,
    data: evolutionStones
  });
});

// Get specific stone information
app.get('/api/stones/:stoneName', (req, res) => {
  const stoneName = req.params.stoneName.toLowerCase() + 'Stone';
  const stone = evolutionStones[stoneName];
  
  if (!stone) {
    return res.status(404).json({
      success: false,
      error: `Stone '${req.params.stoneName}' not found`
    });
  }
  
  res.json({
    success: true,
    data: stone
  });
});

// Check if a Pokemon needs a specific stone
app.get('/api/evolution/:name/stone', (req, res) => {
  const pokemonName = req.params.name.toLowerCase();
  const evolution = pokemonEvolutionData[pokemonName];
  
  if (!evolution) {
    return res.status(404).json({
      success: false,
      error: `Pokemon '${pokemonName}' not found`
    });
  }
  
  const requiresStone = evolution.evolutionChain.some(stage => stage.stone !== null);
  const stoneRequired = evolution.evolutionChain.find(stage => stage.stone)?.stone || null;
  
  res.json({
    success: true,
    pokemon: evolution.name,
    requiresStone: requiresStone,
    stone: stoneRequired,
    evolutionMethod: evolution.evolutionChain.map(stage => ({
      name: stage.name,
      method: stage.method,
      level: stage.level,
      stone: stage.stone
    }))
  });
});

// Get evolution chain summary
app.get('/api/evolution/:name/chain', (req, res) => {
  const pokemonName = req.params.name.toLowerCase();
  const evolution = pokemonEvolutionData[pokemonName];
  
  if (!evolution) {
    return res.status(404).json({
      success: false,
      error: `Pokemon '${pokemonName}' not found`
    });
  }
  
  const chain = evolution.evolutionChain.map((stage, index) => {
    const nextStage = evolution.evolutionChain[index + 1];
    return {
      current: stage.name,
      level: stage.level,
      method: stage.method,
      next: nextStage ? nextStage.name : 'Final form',
      evolutionRequirement: nextStage ? {
        method: nextStage.method,
        level: nextStage.level,
        stone: nextStage.stone
      } : null
    };
  });
  
  res.json({
    success: true,
    pokemon: evolution.name,
    types: evolution.types,
    fullChain: chain,
    description: evolution.description
  });
});

// Root endpoint - serve beautiful landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found. Visit / for the website or /api/evolutions for data"
  });
});

// Start server
app.listen(port, () => {
  console.log(`🎮 Pokemon Evolution API running on http://localhost:${port}`);
  console.log(`📖 Visit http://localhost:${port} for the interactive website`);
  console.log(`🔌 API available at http://localhost:${port}/api/evolutions`);
});

module.exports = app;
