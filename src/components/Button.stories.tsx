import { Meta, StoryObj } from '@storybook/react';
import { Button,  ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button',
    } as ButtonProps
} as Meta

export const Default: StoryObj<ButtonProps> = {}