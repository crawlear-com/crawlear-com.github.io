import { render, screen } from '@testing-library/react'
import Youtube from '../components/embed/Youtube.js'

const div = document.createElement('div')

beforeEach(()=>{  
  document.body.innerHTML = ''
  document.body.append(div)
});

test('renders youtube embed', () => {
  render(<Youtube url='https://www.youtube.com/embed/00000000001' />, div)
  const youtubeEmbedContainer = screen.getByTitle('YouTube video player')

  expect(youtubeEmbedContainer).toBeInTheDocument()
  expect(youtubeEmbedContainer.src).toBe('https://www.youtube.com/embed/00000000001')
  expect(youtubeEmbedContainer.getAttribute('allowFullScreen')).toBe('')
});
