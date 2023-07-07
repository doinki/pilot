import type { Meta, StoryObj } from '@storybook/react';

import FlashOnOutlined from '../../lib/image/FlashOnOutlined';

const meta: Meta<typeof FlashOnOutlined> = {
  component: FlashOnOutlined,
  tags: ['autodocs'],
  title: 'image/FlashOnOutlined',
};

export default meta;
type Story = StoryObj<typeof FlashOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
