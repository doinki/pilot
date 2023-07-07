import type { Meta, StoryObj } from '@storybook/react';

import ShuffleOutlined from '../../lib/av/ShuffleOutlined';

const meta: Meta<typeof ShuffleOutlined> = {
  component: ShuffleOutlined,
  tags: ['autodocs'],
  title: 'av/ShuffleOutlined',
};

export default meta;
type Story = StoryObj<typeof ShuffleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
