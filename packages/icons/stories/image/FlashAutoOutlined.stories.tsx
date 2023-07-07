import type { Meta, StoryObj } from '@storybook/react';

import FlashAutoOutlined from '../../lib/image/FlashAutoOutlined';

const meta: Meta<typeof FlashAutoOutlined> = {
  component: FlashAutoOutlined,
  tags: ['autodocs'],
  title: 'image/FlashAutoOutlined',
};

export default meta;
type Story = StoryObj<typeof FlashAutoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
