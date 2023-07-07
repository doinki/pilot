import type { Meta, StoryObj } from '@storybook/react';

import RepeatOneOutlined from '../../lib/av/RepeatOneOutlined';

const meta: Meta<typeof RepeatOneOutlined> = {
  component: RepeatOneOutlined,
  tags: ['autodocs'],
  title: 'av/RepeatOneOutlined',
};

export default meta;
type Story = StoryObj<typeof RepeatOneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
