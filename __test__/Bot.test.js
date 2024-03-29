import Bot from "../src/modules/Bot.js";

let bot;
beforeEach(() => {
  bot = new Bot();
})

test('selectMove returns valid coordinates', async () => {
  const response = await bot.selectTileTo('attack');
  expect(response.row).toBeGreaterThanOrEqual(0);
  expect(response.row).toBeLessThanOrEqual(9);
})

test('selectMove returns valid direction', async () => {
  const response = await bot.selectTileTo('place');
  expect(response.row).toBeGreaterThanOrEqual(0);
  expect(response.row).toBeLessThanOrEqual(9);
  expect(response.direction).toMatch(/horizontal|vertical/);
})