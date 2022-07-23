import { InputHTMLAttributes } from 'react';

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  prefix?: string;
}

export function InputBox({ label, prefix, ...rest }: InputBoxProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={rest.id}>{label}</label>

      <div className="flex items-center">
        {prefix && <span className="h-11 px-3 flex justify-center items-center bg-zinc-300 rounded-l">{prefix}</span>}
        <input className={`h-11 px-4 border border-zinc-300 flex-1 rounded-r ${!prefix && 'rounded-l'}`} {...rest} />
      </div>
    </div>
  );
}
