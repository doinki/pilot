import type { Meta, StoryObj } from '@storybook/react';

import RepeatOutlined from '../../lib/av/RepeatOutlined';

const meta: Meta<typeof RepeatOutlined> = {
  component: RepeatOutlined,
  tags: ['autodocs'],
  title: 'av/RepeatOutlined',
};

export default meta;
type Story = StoryObj<typeof RepeatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
