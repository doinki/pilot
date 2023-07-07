import type { Meta, StoryObj } from '@storybook/react';

import BlurOffOutlined from '../../lib/image/BlurOffOutlined';

const meta: Meta<typeof BlurOffOutlined> = {
  component: BlurOffOutlined,
  tags: ['autodocs'],
  title: 'image/BlurOffOutlined',
};

export default meta;
type Story = StoryObj<typeof BlurOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
