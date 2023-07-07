import type { Meta, StoryObj } from '@storybook/react';

import SnoozeOutlined from '../../lib/av/SnoozeOutlined';

const meta: Meta<typeof SnoozeOutlined> = {
  component: SnoozeOutlined,
  tags: ['autodocs'],
  title: 'av/SnoozeOutlined',
};

export default meta;
type Story = StoryObj<typeof SnoozeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
