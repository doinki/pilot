import type { Meta, StoryObj } from '@storybook/react';

import ColorizeOutlined from '../../lib/image/ColorizeOutlined';

const meta: Meta<typeof ColorizeOutlined> = {
  component: ColorizeOutlined,
  tags: ['autodocs'],
  title: 'image/ColorizeOutlined',
};

export default meta;
type Story = StoryObj<typeof ColorizeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
