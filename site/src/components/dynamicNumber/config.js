const SPEED_TYPES = {
  FASTER: 'faster',
  FAST: 'fast',
  NORMAL: 'normal',
  SLOW: 'slow',
  SLOWER: 'slower'
};
export const { FASTER, FAST, NORMAL, SLOW, SLOWER } = SPEED_TYPES;

export const getSpeed = speed => {
  switch(speed.toLowerCase()) {
    case FASTER:
      return 25;
    case FAST:
      return 50;
    case NORMAL:
      return 100;
    case SLOW:
      return 150;
    case SLOWER:
      return 200;
  }
};