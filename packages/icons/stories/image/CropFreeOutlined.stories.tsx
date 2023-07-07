import type { Meta, StoryObj } from '@storybook/react';

import CropFreeOutlined from '../../lib/image/CropFreeOutlined';

const meta: Meta<typeof CropFreeOutlined> = {
  component: CropFreeOutlined,
  tags: ['autodocs'],
  title: 'image/CropFreeOutlined',
};

export default meta;
type Story = StoryObj<typeof CropFreeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
