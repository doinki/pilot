import type { Meta, StoryObj } from '@storybook/react';

import EqualizerOutlined from '../../lib/av/EqualizerOutlined';

const meta: Meta<typeof EqualizerOutlined> = {
  component: EqualizerOutlined,
  tags: ['autodocs'],
  title: 'av/EqualizerOutlined',
};

export default meta;
type Story = StoryObj<typeof EqualizerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
