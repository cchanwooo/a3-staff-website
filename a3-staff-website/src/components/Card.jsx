import React from 'react';
import classNames from 'classnames';

const Card = ({ children, className, hoverEffect = false, ...props }) => {
    return (
        <div
            className={classNames(
                'bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden',
                hoverEffect && 'transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
