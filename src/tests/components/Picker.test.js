import { render, screen } from '@testing-library/react';
import Picker from '../../components/Picker.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders Picker', () => {
  render(<Picker initialValue="0" />, div)
  const arrowUp = screen.getAllByRole('button')[0],
    arrowDown = screen.getAllByRole('button')[1],
    value = screen.getByText('0');

  expect(arrowUp).toBeInTheDocument();
  expect(arrowDown).toBeInTheDocument();
  expect(value).toBeInTheDocument();
  expect(value.textContent).toBe('0');
});

test('calls click down', () => {
    render(<Picker 
      initialValue={0}
      maxValue={40}
      minValue={-1} />, div)
  const arrowDown = screen.getAllByRole('button')[1],
    value = screen.getByText('0')

  arrowDown.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  }));
  expect(value.textContent).toBe('-1');
});

test('calls click down: min values control', () => {
  render(<Picker 
    initialValue={0}
    maxValue={40}
    minValue={0} />, div)
  const arrowDown = screen.getAllByRole('button')[1],
  value = screen.getByText('0')

  arrowDown.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  }));

expect(value.textContent).toBe('0');
});

test('calls onclick up', () => {
  render(<Picker 
    initialValue={0}
    maxValue={40}
    minValue={-1} />, div)
  const arrowUp = screen.getAllByRole('button')[0],
  value = screen.getByText('0')

  arrowUp.click();
  expect(value.textContent).toBe('1');
});

test('calls click up: max values control', () => {
  render(<Picker 
    initialValue={40}
    maxValue={40}
    minValue={0} />, div)
  const arrowUp = screen.getAllByRole('button')[0],
  value = screen.getByText('40')

  arrowUp.click();
  expect(value.textContent).toBe('40');
});

test('calls the callback when onClick', () => {
  const callback = jest.fn()
  
  render(<Picker 
    initialValue={0}
    maxValue={40}
    minValue={0}
    callback={callback}
     />, div)
    const arrowUp = screen.getAllByRole('button')[0]

  arrowUp.click();
  expect(callback).toBeCalled();
});