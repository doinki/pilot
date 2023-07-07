import type { Meta, StoryObj } from '@storybook/react';

import VignetteOutlined from '../../lib/image/VignetteOutlined';

const meta: Meta<typeof VignetteOutlined> = {
  component: VignetteOutlined,
  tags: ['autodocs'],
  title: 'image/VignetteOutlined',
};

export default meta;
type Story = StoryObj<typeof VignetteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
