import Bot from "../src/modules/Bot.js";

test('selectMove returns valid coordinates', async () => {
  const bot = new Bot();
  const coordinates = await bot.selectMove();
  expect(coordinates[0]).toBeGreaterThanOrEqual(0);
  expect(coordinates[0]).toBeLessThanOrEqual(9)
})