import type { Meta, StoryObj } from '@storybook/react';

import BlurOnOutlined from '../../lib/image/BlurOnOutlined';

const meta: Meta<typeof BlurOnOutlined> = {
  component: BlurOnOutlined,
  tags: ['autodocs'],
  title: 'image/BlurOnOutlined',
};

export default meta;
type Story = StoryObj<typeof BlurOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
