import type { Meta, StoryObj } from '@storybook/react';

import ColorLensOutlined from '../../lib/image/ColorLensOutlined';

const meta: Meta<typeof ColorLensOutlined> = {
  component: ColorLensOutlined,
  tags: ['autodocs'],
  title: 'image/ColorLensOutlined',
};

export default meta;
type Story = StoryObj<typeof ColorLensOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
