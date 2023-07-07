import type { Meta, StoryObj } from '@storybook/react';

import RepeatOneOnOutlined from '../../lib/av/RepeatOneOnOutlined';

const meta: Meta<typeof RepeatOneOnOutlined> = {
  component: RepeatOneOnOutlined,
  tags: ['autodocs'],
  title: 'av/RepeatOneOnOutlined',
};

export default meta;
type Story = StoryObj<typeof RepeatOneOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
