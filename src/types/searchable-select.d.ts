type TSearchableSelectVariant = 'primary';
type TSearchableSelectSize = 'm';

type TSearchableSelectProps = {
   options: TOption[];
   value?: string;
   displayingValue: string;
   disabled?: boolean;
   className?: string;
   placeholder?: string;
   variant?: TSearchableSelectVariant;
   size?: TSearchableSelectSize;
   label?: string;
   error?: string;
   id?: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   setOption: (option: string) => void;
   optional?: boolean;
};
