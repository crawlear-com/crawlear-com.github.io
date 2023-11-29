import { render, screen, fireEvent } from '@testing-library/react';
import RouteLove from '../components/RouteLove';

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

test('renders RouteLove with love', () => {
  const onLove = jest.fn()
  render(<RouteLove rid='rid' onLove={onLove}></RouteLove>)
  const loveContainer = screen.getByTitle('love')

  expect(loveContainer).toBeInTheDocument()
  expect(loveContainer.classList.contains('loveIcon')).toBeTruthy()
  expect(loveContainer.classList.contains('loved')).toBeTruthy()
});

test('renders RouteLove with no love', () => {
  const onLove = jest.fn()
  window.crawlear.fb.getRouteLove = jest.fn((rid, uid, okCallback, koCallback) => {
    okCallback(false, undefined)
  })
  render(<RouteLove rid='rid' onLove={onLove}></RouteLove>)
  const loveContainer = screen.getByTitle('love')

  expect(loveContainer).toBeInTheDocument()
  expect(loveContainer.classList.contains('loveIcon')).toBeTruthy()
  expect(loveContainer.classList.contains('loved')).toBeFalsy()
});

test('onClick Loves', () => {
  const onLove = jest.fn()
  window.crawlear.fb.getRouteLove = jest.fn((rid, uid, okCallback, koCallback) => {
    okCallback(false, undefined)
  })
  render(<RouteLove rid='rid' onLove={onLove}></RouteLove>)
  const loveContainer = screen.getByTitle('love')

  fireEvent(loveContainer, new MouseEvent('click', {
    clientX: 0,
    clientY: 0,
    bubbles: true,
    cancelable: true,
  }))

  expect(onLove).toHaveBeenCalledWith(true)
});

test('onClick unLove', () => {
  const onLove = jest.fn()
  render(<RouteLove rid='rid' onLove={onLove}></RouteLove>)
  const loveContainer = screen.getByTitle('love')

  fireEvent(loveContainer, new MouseEvent('click', {
    clientX: 0,
    clientY: 0,
    bubbles: true,
    cancelable: true,
  }))

  expect(onLove).toHaveBeenCalledWith(false)
});