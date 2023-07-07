import type { Meta, StoryObj } from '@storybook/react';

import VideocamOutlined from '../../lib/av/VideocamOutlined';

const meta: Meta<typeof VideocamOutlined> = {
  component: VideocamOutlined,
  tags: ['autodocs'],
  title: 'av/VideocamOutlined',
};

export default meta;
type Story = StoryObj<typeof VideocamOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
