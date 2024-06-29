import { Button, ButtonProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren & ButtonProps;

const ButtonCustom: FC<Props> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonCustom;
