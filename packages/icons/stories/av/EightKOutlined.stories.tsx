import type { Meta, StoryObj } from '@storybook/react';

import EightKOutlined from '../../lib/av/EightKOutlined';

const meta: Meta<typeof EightKOutlined> = {
  component: EightKOutlined,
  tags: ['autodocs'],
  title: 'av/EightKOutlined',
};

export default meta;
type Story = StoryObj<typeof EightKOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
