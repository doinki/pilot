import type { Meta, StoryObj } from '@storybook/react';

import CropSquareOutlined from '../../lib/image/CropSquareOutlined';

const meta: Meta<typeof CropSquareOutlined> = {
  component: CropSquareOutlined,
  tags: ['autodocs'],
  title: 'image/CropSquareOutlined',
};

export default meta;
type Story = StoryObj<typeof CropSquareOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
