import mclient from '../index';
import { Position } from '../command/executor';

const baseUrl = 'http://localhost:3000';

const setupFetchMock = () => {
  (globalThis.fetch as any) = jest.fn(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve({})
    })
  );
};

describe('util test', () => {
  beforeEach(() => {
    setupFetchMock();
  });
  test('test set block', async () => {
    setupFetchMock();
    const { world } = mclient(baseUrl);
    await world.setBlock(new Position([1, 2, 3]), 'sand', 3);
  });
  test('test set block relative', async () => {
    setupFetchMock();
    const { world } = mclient(baseUrl);
    await world.setBlock(new Position([1, 2, 3], true), 'sand', 3);
    expect(globalThis.fetch).toBeCalledWith(
      `${baseUrl}/setblock?position=~1%20~2%20~3&tileName=sand&tileData=3`
    );
  });
  test('test set move', async () => {
    const { agent } = mclient(baseUrl);
    await agent.move('forward');
    expect(globalThis.fetch).toBeCalledWith(
      `${baseUrl}/move?direction=forward`
    );
  });
  test('test turn', async () => {
    const { agent } = mclient(baseUrl);
    await agent.turn('left');
    expect(globalThis.fetch).toBeCalledWith(`${baseUrl}/turn?direction=left`);
  });
});
