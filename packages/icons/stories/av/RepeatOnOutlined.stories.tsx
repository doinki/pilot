import type { Meta, StoryObj } from '@storybook/react';

import RepeatOnOutlined from '../../lib/av/RepeatOnOutlined';

const meta: Meta<typeof RepeatOnOutlined> = {
  component: RepeatOnOutlined,
  tags: ['autodocs'],
  title: 'av/RepeatOnOutlined',
};

export default meta;
type Story = StoryObj<typeof RepeatOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
