import type { Meta, StoryObj } from '@storybook/react';

import CropRotateOutlined from '../../lib/image/CropRotateOutlined';

const meta: Meta<typeof CropRotateOutlined> = {
  component: CropRotateOutlined,
  tags: ['autodocs'],
  title: 'image/CropRotateOutlined',
};

export default meta;
type Story = StoryObj<typeof CropRotateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
