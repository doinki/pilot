import type { Meta, StoryObj } from '@storybook/react';

import BurstModeOutlined from '../../lib/image/BurstModeOutlined';

const meta: Meta<typeof BurstModeOutlined> = {
  component: BurstModeOutlined,
  tags: ['autodocs'],
  title: 'image/BurstModeOutlined',
};

export default meta;
type Story = StoryObj<typeof BurstModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
