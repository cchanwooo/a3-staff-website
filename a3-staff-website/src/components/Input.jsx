import React from 'react';
import classNames from 'classnames';

const Input = ({
    label,
    id,
    type = 'text',
    error,
    className,
    placeholder,
    ...props
}) => {
    return (
        <div className={classNames('w-full', className)}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                className={classNames(
                    'w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-colors',
                    error ? 'border-red-500' : 'border-gray-300',
                    'placeholder-gray-400'
                )}
                placeholder={placeholder}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default Input;
