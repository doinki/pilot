import type { Meta, StoryObj } from '@storybook/react';

import CropDinOutlined from '../../lib/image/CropDinOutlined';

const meta: Meta<typeof CropDinOutlined> = {
  component: CropDinOutlined,
  tags: ['autodocs'],
  title: 'image/CropDinOutlined',
};

export default meta;
type Story = StoryObj<typeof CropDinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
