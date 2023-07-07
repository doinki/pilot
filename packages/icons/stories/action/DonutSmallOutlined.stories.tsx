import type { Meta, StoryObj } from '@storybook/react';

import DonutSmallOutlined from '../../lib/action/DonutSmallOutlined';

const meta: Meta<typeof DonutSmallOutlined> = {
  component: DonutSmallOutlined,
  tags: ['autodocs'],
  title: 'action/DonutSmallOutlined',
};

export default meta;
type Story = StoryObj<typeof DonutSmallOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
