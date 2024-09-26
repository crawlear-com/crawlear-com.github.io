import { render, screen } from '@testing-library/react'
import Youtube from '../components/embed/Youtube.js'

const div = document.createElement('div')

beforeEach(()=>{  
  document.body.innerHTML = ''
  document.body.append(div)
});

test('renders youtube embed', () => {
  render(<Youtube url='https://www.youtube.com/watch?v=Yb5pPoPf9F4' />, div)
  const youtubeEmbedContainer = screen.getByTitle('YouTube video player')

  expect(youtubeEmbedContainer).toBeInTheDocument()
  expect(youtubeEmbedContainer.src).toBe('https://www.youtube.com/embed/Yb5pPoPf9F4')
  expect(youtubeEmbedContainer.getAttribute('allowFullScreen')).toBe('')
});

test('renders youtube shorts embed', () => {
  render(<Youtube url='https://www.youtube.com/shorts/kB-GywbL9hM' />, div)
  const youtubeEmbedContainer = screen.getByTitle('YouTube video player')

  expect(youtubeEmbedContainer).toBeInTheDocument()
  expect(youtubeEmbedContainer.src).toBe('https://www.youtube.com/embed/kB-GywbL9hM')
  expect(youtubeEmbedContainer.getAttribute('allowFullScreen')).toBe('')
});
