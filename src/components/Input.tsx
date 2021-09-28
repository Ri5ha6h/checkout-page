import { FC, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  placeholder?: string;
  Icon?: IconType;
  inputClass?: string;
}

const Input: FC<InputProps> = ({
  inputName,
  placeholder,
  Icon,
  inputClass,
  ...rest
}) => {
  return (
    <div className='h-28 mt-2'>
      <label
        htmlFor={inputName}
        className='text-sm font-semibold text-gray-500 tracking-wide'
      >
        {inputName}
      </label>
      <div className='relative mt-1'>
        <input
          className={
            'border-2 py-4 pl-14 rounded-lg text-gray-400 text-xl outline-none ' +
            inputClass
          }
          {...rest}
          id={inputName}
          placeholder={placeholder}
          required
        />
        {Icon && (
          <Icon className='absolute top-4 w-6 h-6 ml-3 text-gray-400' />
        )}
      </div>
    </div>
  );
};

export default Input;
