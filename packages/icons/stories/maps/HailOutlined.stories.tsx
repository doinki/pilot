import type { Meta, StoryObj } from '@storybook/react';

import HailOutlined from '../../lib/maps/HailOutlined';

const meta: Meta<typeof HailOutlined> = {
  component: HailOutlined,
  tags: ['autodocs'],
  title: 'maps/HailOutlined',
};

export default meta;
type Story = StoryObj<typeof HailOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
