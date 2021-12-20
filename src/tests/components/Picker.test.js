import { render } from '@testing-library/react';
import { call } from 'file-loader';
import Picker from '../../components/Picker.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders Picker', () => {
  const { container } = render(<Picker initialValue="0" />, div),
    arrowUp = container.querySelector(".picker--arrowUp"),
    arrowDown = container.querySelector(".picker--arrowDown"),
    value = container.querySelector(".picker--value");

  expect(arrowUp).toBeInTheDocument();
  expect(arrowDown).toBeInTheDocument();
  expect(value).toBeInTheDocument();
  expect(value.textContent).toBe('0');
});

test('calls click down', () => {
    const { container } = render(<Picker 
      initialValue={0}
      maxValue={40}
      minValue={-1} />, div),
    arrowDown = container.querySelector(".picker--arrowDown"),
    value = container.querySelector(".picker--value");

  arrowDown.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  }));
  expect(value.textContent).toBe('-1');
});

test('calls click down: min values control', () => {
  const { container } = render(<Picker 
    initialValue={0}
    maxValue={40}
    minValue={0} />, div),
  arrowDown = container.querySelector(".picker--arrowDown"),
  value = container.querySelector(".picker--value");

  arrowDown.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0
  }));

expect(value.textContent).toBe('0');
});

test('calls onclick up', () => {
  const { container } = render(<Picker 
    initialValue={0}
    maxValue={40}
    minValue={-1} />, div),
    arrowUp = container.querySelector(".picker--arrowUp"),
    value = container.querySelector(".picker--value");

  arrowUp.click();
  expect(value.textContent).toBe('1');
});

test('calls click up: max values control', () => {
  const { container } = render(<Picker 
    initialValue={40}
    maxValue={40}
    minValue={0} />, div),
  arrowUp = container.querySelector(".picker--arrowUp"),
  value = container.querySelector(".picker--value");

  arrowUp.click();
  expect(value.textContent).toBe('40');
});

test('calls the callback when onClick', () => {
  const callback = jest.fn(),
    { container } = render(<Picker 
    initialValue={0}
    maxValue={40}
    minValue={0}
    callback={callback}
     />, div),
  arrowUp = container.querySelector(".picker--arrowUp");

  arrowUp.click();
  expect(callback).toBeCalled();
});