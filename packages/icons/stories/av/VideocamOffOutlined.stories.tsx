import type { Meta, StoryObj } from '@storybook/react';

import VideocamOffOutlined from '../../lib/av/VideocamOffOutlined';

const meta: Meta<typeof VideocamOffOutlined> = {
  component: VideocamOffOutlined,
  tags: ['autodocs'],
  title: 'av/VideocamOffOutlined',
};

export default meta;
type Story = StoryObj<typeof VideocamOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
