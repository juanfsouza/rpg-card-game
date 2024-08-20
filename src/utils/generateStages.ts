import enemies from '../enemies/enemy';

const generateStages = (): string[] => {
  const stages = [];
  const types = ['monstro', 'boss', 'fogueira', 'loja', 'aleatorio'];
  
  for (let i = 0; i < 15; i++) {
    const randomType = types[Math.floor(Math.random() * types.length)];
    stages.push(randomType);
  }
  
  return stages;
};

export default generateStages;
