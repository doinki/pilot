import type { Meta, StoryObj } from '@storybook/react';

import FreeBreakfastOutlined from '../../lib/places/FreeBreakfastOutlined';

const meta: Meta<typeof FreeBreakfastOutlined> = {
  component: FreeBreakfastOutlined,
  tags: ['autodocs'],
  title: 'places/FreeBreakfastOutlined',
};

export default meta;
type Story = StoryObj<typeof FreeBreakfastOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
