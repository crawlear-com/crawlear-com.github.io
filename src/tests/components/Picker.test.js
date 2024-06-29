import { render, screen } from '@testing-library/react';
import Picker from '../../components/Picker.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders Picker', () => {
  render(<Picker initialValue="0" />, div)
  const arrows = screen.getAllByRole("button"),
    value = screen.getByTestId("picker--value");

  expect(arrows.length).toBe(2);
  expect(arrows[0]).toBeInTheDocument();
  expect(arrows[1]).toBeInTheDocument();
  expect(value).toBeInTheDocument();
  expect(value.textContent).toBe('0');
});

test('calls click down', () => {
  render(<Picker 
    initialValue={0}
    maxValue={40}
    minValue={-1} />, div)
  const arrowDown = screen.getAllByRole('button')[1],
    value = screen.getByTestId("picker--value");

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
  const arrowDown = screen.getByRole("button"),
    value = screen.getByRole("picker--value");

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
  const arrowUp = screen.getByRole("button")[0],
    value = screen.getByRole("picker--value");

  arrowUp.click();
  expect(value.textContent).toBe('1');
});

test('calls click up: max values control', () => {
  render(<Picker 
    initialValue={40}
    maxValue={40}
    minValue={0} />, div)
  const arrowUp = screen.getByRole("button")[0],
    value = screen.getByTestId("picker--value");

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
  const arrowUp = screen.getByRole("button")[0];

  arrowUp.click();
  expect(callback).toBeCalled();
});