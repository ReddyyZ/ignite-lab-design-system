import { Meta, StoryObj } from '@storybook/react';
import { Heading,  HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
        size: 'md'
    } as HeadingProps
} as Meta

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    } as HeadingProps
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    } as HeadingProps
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
        )
    } as HeadingProps
}