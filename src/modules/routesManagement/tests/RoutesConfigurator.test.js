import { render, screen, fireEvent } from '@testing-library/react';
import RoutesConfigurator from '../components/RoutesConfigurator';
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

test('renders RoutesConfigurator', () => {
  const onRouteCreated = jest.fn()
  const onBackClick = jest.fn()
  const route = new Route('test', 'test d', false, 'locationMapUrl', { data: ''},{lat:0,lon:0},{lat:0,lon:0},[''],'')

  render(<RoutesConfigurator inRoute={route} onRouteCreated={onRouteCreated} onBackClick={onBackClick} />)
  const name = screen.getByLabelText('description.nombrederuta')
  const description = screen.getByLabelText('description.descripcion')
  const isPublic = screen.getByLabelText('description.publico')
  const scale = screen.getByLabelText('description.escala')
  const difficulty = screen.getByLabelText('description.dificultad')
  const video = screen.getByLabelText('description.video')
  const point = screen.getByLabelText('description.puntoencuentro')

  expect(name).toBeInTheDocument()
  expect(description).toBeInTheDocument()
  expect(isPublic).toBeInTheDocument()
  expect(scale).toBeInTheDocument()
  expect(difficulty).toBeInTheDocument()
  expect(video).toBeInTheDocument()
  expect(point).toBeInTheDocument()
});

