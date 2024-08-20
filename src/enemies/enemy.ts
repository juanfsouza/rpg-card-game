interface Enemy {
    name: string;
    health: number;
    attack: number;
  }
  
  const enemies: Enemy[] = [
    { name: 'Goblin', health: 20, attack: 5 },
    { name: 'Orc', health: 30, attack: 8 },
    { name: 'Troll', health: 40, attack: 12 },
  ];
  
  export default enemies;
  