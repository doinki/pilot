import type { Meta, StoryObj } from '@storybook/react';

import CropPortraitOutlined from '../../lib/image/CropPortraitOutlined';

const meta: Meta<typeof CropPortraitOutlined> = {
  component: CropPortraitOutlined,
  tags: ['autodocs'],
  title: 'image/CropPortraitOutlined',
};

export default meta;
type Story = StoryObj<typeof CropPortraitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
