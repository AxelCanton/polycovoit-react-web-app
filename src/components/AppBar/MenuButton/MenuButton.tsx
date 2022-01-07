import { Button } from '@mui/material';
import { IMenuButtonProps } from './menuButton.type';

const MenuButton = ({
    text,
    onClick
}: IMenuButtonProps) => {

    return (
        <Button
                onClick={onClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {text}
        </Button>
    );
}

export default MenuButton;