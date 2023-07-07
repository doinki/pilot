import type { Meta, StoryObj } from '@storybook/react';

import BlurLinearOutlined from '../../lib/image/BlurLinearOutlined';

const meta: Meta<typeof BlurLinearOutlined> = {
  component: BlurLinearOutlined,
  tags: ['autodocs'],
  title: 'image/BlurLinearOutlined',
};

export default meta;
type Story = StoryObj<typeof BlurLinearOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
