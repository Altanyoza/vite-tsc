import React, { PureComponent } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled';
  error?: boolean;
  className?: string;
}

interface InputState {
  
}

class Input extends PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {};
  }

  getInputClasses() {
    const { size = 'md', variant = 'outline', error = false, className = '' } = this.props;
    const sizeClasses = {
      sm: 'py-1 px-2 text-sm',
      md: 'py-2 px-3 text-base',
      lg: 'py-3 px-4 text-lg',
    };
    const variantClasses = {
      outline: 'bg-transparent border border-gray-300 focus:border-amber-400',
      filled: 'bg-gray-100 border border-transparent focus:bg-white focus:border-amber-400',
    };
    const errorClass = error ? 'border-red-500' : '';

    const baseClasses = 'rounded transition-colors duration-300 w-full focus:outline-none';

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${errorClass} ${className}`;
  }

  render() {
    const { size, variant, error, className, ...rest } = this.props;
    return (
      <input
        className={this.getInputClasses()}
        {...rest}
      />
    );
  }
}

export default Input;