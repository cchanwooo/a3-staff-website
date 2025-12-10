import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    type = 'button',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md';

    const variants = {
        primary: 'bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-900 shadow-md hover:shadow-lg',
        secondary: 'bg-accent-600 text-white hover:bg-yellow-600 focus:ring-accent-500 shadow-md',
        outline: 'border-2 border-primary-900 text-primary-900 hover:bg-primary-50 focus:ring-primary-900',
        ghost: 'text-primary-900 hover:bg-gray-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            type={type}
            className={classNames(baseStyles, variants[variant], sizes[size], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
