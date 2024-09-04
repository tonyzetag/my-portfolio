import React from 'react';

const buttonCommons = 'text-sm py-1 px-5 mr-1 mb-1 rounded-md transition duration-300 font-bold';

const buttonVariants = {
    white: 'bg-white hover:bg-whiteActive text-gray-900',
    primary: 'bg-primary hover:bg-primaryActive text-white',
    light: 'bg-light hover:bg-lightActive text-lightInverse',
    secondary: 'bg-secondary hover:bg-secondaryActive text-white',
    success: 'bg-success hover:bg-successActive text-white',
    info: 'bg-info hover:bg-infoActive text-white',
    warning: 'bg-warning hover:bg-warningActive text-white',
    danger: 'bg-danger hover:bg-dangerActive text-white',
    dark: 'bg-dark hover:bg-darkActive text-white',
};

const possibleVariants = Object.keys(buttonVariants) as Array<keyof typeof buttonVariants>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    predefinedClassName?: keyof typeof buttonVariants;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ predefinedClassName = "white", children, ...restProps }) => {
    return (
        <button className={[buttonCommons, buttonVariants[predefinedClassName]].join(" ")} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
export { possibleVariants };