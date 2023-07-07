import type { Meta, StoryObj } from '@storybook/react';

import HomeOutlined from '../../lib/action/HomeOutlined';

const meta: Meta<typeof HomeOutlined> = {
  component: HomeOutlined,
  tags: ['autodocs'],
  title: 'action/HomeOutlined',
};

export default meta;
type Story = StoryObj<typeof HomeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
