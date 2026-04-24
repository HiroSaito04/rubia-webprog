// src/assets/article-content.js
import mountMoonImg from './res/mount-moon.jpg';
import magikarpImg from './res/magikarp.jpg';
import electricImg from './res/electric.jpg';
import ceruleanImg from './res/ceruleancave.jpg';

const articles = [
  { 
    id: '402', 
    name: 'mount-moon', // This matches the URL param :name
    title: 'Mount Moon Sightings', 
    desc: 'Clefairy migration patterns are peaking this week. Bring Moon Stones and plenty of Repels!', 
    content: [
      "Local trainers report a massive increase in pink-furred Pokémon near the peak.",
      "The moon stone deposits seem to be glowing brighter than usual this cycle.",
      "Safety Warning: Team Rocket scouts have been spotted near the northern entrance."
    ],
    type: 'Fairy', 
    author: 'Trainer Red',
    image: mountMoonImg,
    color: 'bg-pink-500'
  },
  { 
    id: '129', 
    name: 'magikarp-power', 
    title: 'Magikarp: Hidden Power?', 
    desc: 'Is it possible for a splash to eventually break mountains? My research says yes. Evolution is key.', 
    content: [
      "While many mock the Magikarp for its 'Splash' move, its endurance is legendary.",
      "Data suggests that a Magikarp that survives long enough undergoes a total molecular restructuring.",
      "Recommendation: Keep fishing. The payoff is worth the wait."
    ],
    type: 'Water', 
    author: 'Prof. Coel',
    image: magikarpImg,
    color: 'bg-blue-500'
  },
  { 
    id: '025', 
    name: 'static-tips', 
    title: 'Static Electricity Tips', 
    desc: 'How to groom your Electric types without getting paralyzed in the process. Safety first!', 
    content: [
      "Rubber gloves are a trainer's best friend when dealing with high-voltage companions.",
      "Grounding yourself before pets can prevent accidental 100,000-volt discharges.",
      "If your hair starts standing up, exit the immediate area immediately."
    ],
    type: 'Electric', 
    author: 'Sparky 99',
    image: electricImg,
    color: 'bg-yellow-400'
  },
  { 
    id: '150', 
    name: 'cerulean-myths', 
    title: 'Cerulean Cave Myths', 
    desc: 'Deep-dive into the psychic resonance felt near the restricted cave zone. Investigation ongoing.', 
    content: [
      "The air near the cave mouth vibrates with a frequency that causes headaches in non-psychics.",
      "Ancient carvings suggest a powerful entity was created, not born, within these walls.",
      "Entry remains strictly prohibited by the Pokémon League."
    ],
    type: 'Psychic', 
    author: 'Mystic_Oak',
    image: ceruleanImg,
    color: 'bg-purple-600'
  },
];

export default articles;