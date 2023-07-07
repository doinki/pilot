import type { Meta, StoryObj } from '@storybook/react';

import LowPriorityOutlined from '../../lib/content/LowPriorityOutlined';

const meta: Meta<typeof LowPriorityOutlined> = {
  component: LowPriorityOutlined,
  tags: ['autodocs'],
  title: 'content/LowPriorityOutlined',
};

export default meta;
type Story = StoryObj<typeof LowPriorityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
