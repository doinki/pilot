import type { Meta, StoryObj } from '@storybook/react';

import HlsOffOutlined from '../../lib/action/HlsOffOutlined';

const meta: Meta<typeof HlsOffOutlined> = {
  component: HlsOffOutlined,
  tags: ['autodocs'],
  title: 'action/HlsOffOutlined',
};

export default meta;
type Story = StoryObj<typeof HlsOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
