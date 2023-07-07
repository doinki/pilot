import type { Meta, StoryObj } from '@storybook/react';

import HourglassEmptyOutlined from '../../lib/action/HourglassEmptyOutlined';

const meta: Meta<typeof HourglassEmptyOutlined> = {
  component: HourglassEmptyOutlined,
  tags: ['autodocs'],
  title: 'action/HourglassEmptyOutlined',
};

export default meta;
type Story = StoryObj<typeof HourglassEmptyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
