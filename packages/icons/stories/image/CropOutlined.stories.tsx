import type { Meta, StoryObj } from '@storybook/react';

import CropOutlined from '../../lib/image/CropOutlined';

const meta: Meta<typeof CropOutlined> = {
  component: CropOutlined,
  tags: ['autodocs'],
  title: 'image/CropOutlined',
};

export default meta;
type Story = StoryObj<typeof CropOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
