import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import classes from './fullscreenToggler.module.css';

interface IFullscreenTogglerProps {
  elementId: string;
}

export default function FullscreenToggler({
  elementId,
}: IFullscreenTogglerProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    });
    return () => {
      document.removeEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          setIsFullScreen(false);
        }
      });
    };
  }, []);

  const toggleFullScreen = (elementId: string) => {
    const HTMLelement = document.querySelector(`#${elementId}`);

    if (!document.fullscreenElement) {
      HTMLelement?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <Button
      className={classes.toggleButtonIcon}
      onClick={() => {
        toggleFullScreen(elementId);
      }}>
      {isFullScreen ? (
        <FullscreenExitIcon className={classes.toggleButtonIcon} />
      ) : (
        <FullscreenIcon className={classes.toggleButtonIcon} />
      )}
    </Button>
  );
}