import { render } from '@testing-library/react';
import YoutubeEmbed from '../../components/YoutubeEmbed.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders youtube embed', () => {
  const { container } = render(<YoutubeEmbed embedId="000001" />, div),
    youtubeEmbedContainer = container.querySelector('.video-responsive > iframe');

  expect(youtubeEmbedContainer.width).toBe('853');
  expect(youtubeEmbedContainer.height).toBe('480');
  expect(youtubeEmbedContainer.src).toBe('https://www.youtube.com/embed/000001');
  expect(youtubeEmbedContainer.getAttribute('allowFullScreen')).toBe('');
});
