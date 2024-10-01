import { fireEvent, render, screen } from '@testing-library/react';
import CopySharer from '../components/embed/CopySharer';

const div = document.createElement('div');

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

beforeEach(()=>{  
  const writeText = jest.fn()
  
  document.body.innerHTML = '';
  document.body.append(div);
  Object.assign(navigator, {
    clipboard: {
      writeText,
    },
  });
});

test('renders the copy button', () => {
  render(<CopySharer url="https://crawlear.com/gameViewer?gid=gameId" />, div)

  const button = screen.getByText('description.copiar')
  expect(button).toBeInTheDocument()
});

test('copy button copies the URL', () => {
  render(<CopySharer url="https://crawlear.com/gameViewer?gid=gameId" />, div)

  const button = screen.getByText('description.copiar')
  fireEvent.click(button)
  expect(screen.getByText('description.copiado')).toBeInTheDocument()
});

test('the copy process was succesful', () => {
  const url = "https://crawlear.com/gameViewer?gid=gameId"
  const writeTextMock = jest.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();

  render(<CopySharer url={url} />, div)

  const button = screen.getByText('description.copiar')
  fireEvent.click(button)
  expect(writeTextMock).toHaveBeenCalledWith(url)
})