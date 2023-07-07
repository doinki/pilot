import type { Meta, StoryObj } from '@storybook/react';

import RemoveRedEyeOutlined from '../../lib/image/RemoveRedEyeOutlined';

const meta: Meta<typeof RemoveRedEyeOutlined> = {
  component: RemoveRedEyeOutlined,
  tags: ['autodocs'],
  title: 'image/RemoveRedEyeOutlined',
};

export default meta;
type Story = StoryObj<typeof RemoveRedEyeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
