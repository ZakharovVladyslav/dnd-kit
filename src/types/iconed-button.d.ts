import { ReactNode } from 'react';

type TIconedButtonVariant = 'primary';
type TIconedButtonSize = 's' | 'm' | 'l';
type TIconedButtonType = 'button' | 'submit';
type TIconedButtonIconPosition = 'left' | 'right';

type TIconedButtonIconProps = {
   className?: string;
};

type TIconedButtonProps = {
   size?: TIconedButtonSize;
   type?: TIconedButtonType;
   variant?: TIconedButtonVariant;
   className?: string;
   icon: FC<TIconedButtonIconProps>;
   iconPosition?: TIconedButtonIconPosition;
   onClick: VoidFunction;
   disabled?: boolean;
   id?: string;
   position?: EPosition;
   children?: ReactNode;
};
