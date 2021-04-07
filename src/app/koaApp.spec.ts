import { startService } from './koaApp';

jest.mock('koa');

const setServerPortEnv = (port: string) => {
  const originalServerPort = process.env.SERVER_PORT;

  process.env.SERVER_PORT = port;

  return () => {
    process.env.SERVER_PORT = originalServerPort;
  };
};

const deleteServerPortEnv = () => {
  const originalServerPort = process.env.SERVER_PORT;

  delete process.env.SERVER_PORT;

  return () => {
    process.env.SERVER_PORT = originalServerPort;
  };
};

describe('Koa app', () => {
  it('should set the port if SERVER_PORT is set', () => {
    const port = '5000';
    const cleanup = setServerPortEnv(port);
    const app = startService();
    expect(app.listen).toHaveBeenCalledWith(port);

    cleanup();
  });

  it('should not set the port if SERVER_PORT is not set', () => {
    const cleanup = deleteServerPortEnv();
    const app = startService();
    expect(app.listen).not.toHaveBeenCalled();

    cleanup();
  });
});
