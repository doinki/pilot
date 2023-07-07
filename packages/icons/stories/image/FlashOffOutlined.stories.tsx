import type { Meta, StoryObj } from '@storybook/react';

import FlashOffOutlined from '../../lib/image/FlashOffOutlined';

const meta: Meta<typeof FlashOffOutlined> = {
  component: FlashOffOutlined,
  tags: ['autodocs'],
  title: 'image/FlashOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FlashOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
