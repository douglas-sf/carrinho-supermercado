import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: keyof typeof buttonTypes;
}

const buttonTypes = {
  success: 'bg-green-600 hover:bg-green-700 disabled:bg-green-600',
  danger: 'bg-red-600 hover:bg-red-700 disabled:bg-red-600',
  primary: 'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500',
  secondary: 'bg-zinc-400 hover:bg-zinc-500 disabled:bg-zinc-400',
};

export function Button({ theme, children, ...rest }: ButtonProps) {
  const themeColor = theme ? buttonTypes[theme] : buttonTypes.primary;

  return (
    <button
      className={`${themeColor} px-3 py-2 flex gap-2 items-center justify-center rounded text-white font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      {...rest}
    >
      {children}
    </button>
  );
}
