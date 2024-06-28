type TSelectVariant = 'primary';
type TSelectSize = 'm';

type TSelectProps = {
   options: TOption[];
   value: string;
   displayingValue: string;
   disabled?: boolean;
   className?: string;
   placeholder?: string;
   icon?: FC<SVGProps<SVGSVGElement>> | string;
   variant?: TSelectVariant;
   size?: TSelectSize;
   label?: string;
   error?: string;
   id?: string;
   onChange: (value: string) => void;
};
