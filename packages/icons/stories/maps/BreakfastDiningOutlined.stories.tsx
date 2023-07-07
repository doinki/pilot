import type { Meta, StoryObj } from '@storybook/react';

import BreakfastDiningOutlined from '../../lib/maps/BreakfastDiningOutlined';

const meta: Meta<typeof BreakfastDiningOutlined> = {
  component: BreakfastDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/BreakfastDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof BreakfastDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
