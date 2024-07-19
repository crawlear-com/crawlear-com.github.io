import { render, screen } from '@testing-library/react';
import MaxTimePicker from '../components/MaxTimePicker.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders MaxTimePicker with 2 pickers', () => {
  const onMaxTimeChange = jest.fn()
  render(<MaxTimePicker 
      hours={0}
      minutes={0}
      seconds={0}
      onMaxTimeChange={onMaxTimeChange}
  />, div);

  expect(screen.getAllByRole('button').length).toBe(2);
});

test('calls the onMaxTimeChange callback on time change with correct time', () => {
    const onMaxTimeChange = jest.fn()

    render(<MaxTimePicker 
        hours={0}
        minutes={0}
        seconds={0}
        onMaxTimeChange={onMaxTimeChange}
    />, div)
    const arrow = screen.getByRole("button");
  
    arrow.click();
    expect(onMaxTimeChange).toHaveBeenCalledWith(60000);
  });