import { render } from '@testing-library/react';
import MaxTimePicker from '../../components/MaxTimePicker.js';

const div = document.createElement('div');

beforeEach(()=>{  
  document.body.innerHTML = '';
  document.body.append(div);
});

test('renders MaxTimePicker with 3 pickers', () => {
  const onMaxTimeChange = jest.fn(),
    { container } = render(<MaxTimePicker 
      hours={0}
      minutes={0}
      seconds={0}
      onMaxTimeChange={onMaxTimeChange}
  />, div);

    expect(container.querySelectorAll('.pickerContainer .picker').length).toBe(3);
});

test('calls the onMaxTimeChange callback on time change with correct time', () => {
    const onMaxTimeChange = jest.fn(),
      { container } = render(<MaxTimePicker 
        hours={0}
        minutes={0}
        seconds={0}
        onMaxTimeChange={onMaxTimeChange}
    />, div),
        arrow = container.querySelector(".picker--arrowUp");
  
    arrow.click();
    expect(onMaxTimeChange).toHaveBeenCalledWith(3600000);
  });