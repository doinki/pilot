import type { Meta, StoryObj } from '@storybook/react';

import DonutLargeOutlined from '../../lib/action/DonutLargeOutlined';

const meta: Meta<typeof DonutLargeOutlined> = {
  component: DonutLargeOutlined,
  tags: ['autodocs'],
  title: 'action/DonutLargeOutlined',
};

export default meta;
type Story = StoryObj<typeof DonutLargeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
