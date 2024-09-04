'use client';

import React from 'react';
import Button, { possibleVariants } from "../components/base/Button";

const Page = () => {

    return (
        <div>
            <h1>Button palette</h1>
            {ButtonPalette()}
        </div>

    );
};

const ButtonPalette = () => {
    return (
        <div>
            {possibleVariants.map((variant) => (
                <Button key={variant} predefinedClassName={variant} onClick={() => alert('Hello, World!')}>
                    {variant}
                </Button>
            ))}
        </div>
    );
};

export default Page;