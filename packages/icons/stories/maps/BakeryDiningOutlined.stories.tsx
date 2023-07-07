import type { Meta, StoryObj } from '@storybook/react';

import BakeryDiningOutlined from '../../lib/maps/BakeryDiningOutlined';

const meta: Meta<typeof BakeryDiningOutlined> = {
  component: BakeryDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/BakeryDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof BakeryDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
