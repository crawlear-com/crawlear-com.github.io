import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import Analytics from '../../Analytics';

const LIGHTMODE_CLASS = 'lightMode';

function UseMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [lightMode, setLightMode] = React.useState(false);
  const navigate = useNavigate();

  function onMenuClick() {
      setIsOpen(!isOpen);
  }

  function switchLightMode(event: React.MouseEvent<HTMLElement>) {
      event.preventDefault();
      event.stopPropagation();

      if (lightMode) {
          setLightMode(false);
          document.body.classList.remove(LIGHTMODE_CLASS);
      } else {
          setLightMode(true);
          document.body.classList.add(LIGHTMODE_CLASS);
      }
      onMenuClick()
  }

  function browseTo(path: string) {
      Analytics.event('navigation','menu', path);
      navigate(path)
  }

  return [isOpen, onMenuClick, switchLightMode, browseTo]
}

export default UseMenu
