import liveBar from '../livebar.js';

test('Функция liveBar должна правильно выводить уровень здоровья', () => {
  const healthLevels = [
    { health: 90, expected: 'healthy' },
    { health: 50, expected: 'wounded' },
    { health: 15, expected: 'wounded' },
    { health: 10, expected: 'critical' },
  ];

  healthLevels.forEach(item => {
    expect(liveBar({ name: '', health: item.health })).toEqual(item.expected);
  });
});

