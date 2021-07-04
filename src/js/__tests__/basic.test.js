import Settings from '../Settings';

test('class "Settings" exists', () => {
  expect(new Settings()).toBeDefined();
});

const settings = new Settings();

test.each([
  'default',
  'user',
  'availableSettings',
])('class "Settings" has the "%s" property with Map object', (property) => {
  expect(settings[property]).toBeDefined();
  expect(settings[property] instanceof Map).toBeTruthy();
});

test('object "user" of class "Settings" allows you to set available settings', () => {
  settings.user.set('theme', 'light');
  settings.user.set('unkown key', 'pop');
  settings.user.set('difficulty', 'unkown value');
  expect(settings.user.get('theme')).toBe('light');
  expect(settings.user.get('unkown key')).not.toBeDefined();
  expect(settings.user.get('difficulty')).not.toBeDefined();
});

test('class "Settings" has a working "getSettings" method', () => {
  expect(settings.getSettings()).toEqual(new Map([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]));
});
