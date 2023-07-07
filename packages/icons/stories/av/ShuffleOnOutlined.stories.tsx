import type { Meta, StoryObj } from '@storybook/react';

import ShuffleOnOutlined from '../../lib/av/ShuffleOnOutlined';

const meta: Meta<typeof ShuffleOnOutlined> = {
  component: ShuffleOnOutlined,
  tags: ['autodocs'],
  title: 'av/ShuffleOnOutlined',
};

export default meta;
type Story = StoryObj<typeof ShuffleOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
