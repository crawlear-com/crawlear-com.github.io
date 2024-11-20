import { renderHook } from '@testing-library/react';
import UseRoutesConfigurator from '../hooks/UseRoutesConfigurator';
import Route from '../Route';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
      return {
          t: (str) => str,
          i18n: {
              changeLanguage: () => new Promise(() => {}),
          }
      };
  }
}));

beforeEach(() => {
  window.crawlear = {
    fb: {
      getRouteLove: jest.fn((rid, uid, okCallback, koCallback) => {
        okCallback(true, 'lid')
      }),
      loveRoute: jest.fn(),
      unloveRoute: jest.fn()
    },
    user: {
      uid: 'uid'
    }
  }
})

afterEach(() => {
  delete window.crawlear
})

test('renders useRoutesConfigurator hook', () => {
  const onRouteCreated = jest.fn()
  const route = new Route('test', 'test d', false, 'locationMapUrl', { data: ''},{lat:0,lon:0},{lat:0,lon:0},[''],'')

  const { result } = renderHook(() => UseRoutesConfigurator(route, onRouteCreated))
  //route, error, onCreateRoute, onDificultyChange, onInputChange, onFileResolved, validateFormState

  expect(result.current[0]).toBe(route)
  expect(result.current[1]).toBe('')
});

