export const createQueryStrings = (query: {}) => {
  const entries = Object.entries(query);
  return entries.reduce((acc, value, index) => {
    if (value[1] === undefined) {
      return acc;
    }
    if (index === 0) {
      return `${acc + value[0]}=${value[1]}`;
    }
    return `${acc}&${value[0]}=${value[1]}`;
  }, '');
};

export const createPositionStr = (position: number[], isRelative: boolean) => {
  const prefix = isRelative ? '~' : '';
  return position.reduce((acc, current, index) => {
    if (index === 0) {
      return acc + prefix + current;
    }
    return `${acc}%20${prefix}${current}`;
  }, '');
};

interface endpoints {
  http: string;
  ws: string;
}
const connectCommand = '/connect';
const createHttpAddress = (ip: string) => `http://${ip}:8080`;
const createWsAddress = (ip: string) => `ws://${ip}:19131`;
export const formatUrl = (connect: string | undefined): endpoints => {
  if (!connect) {
    throw new Error('Please, set /connect command or IP');
  }

  if (connect.includes(connectCommand)) {
    const ip = connect
      .replace(connectCommand, '')
      .replace(/ /g, '')
      .split(':')[0];
    return {
      http: createHttpAddress(ip),
      ws: createWsAddress(ip)
    };
  }

  if (connect.includes('http://')) {
    const ip = connect.replace('http://', '').split(':')[0];
    return {
      http: connect,
      ws: createWsAddress(ip)
    };
  }

  return {
    http: createHttpAddress(connect),
    ws: createWsAddress(connect)
  };
};
