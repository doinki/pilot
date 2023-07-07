import type { Meta, StoryObj } from '@storybook/react';

import CompareArrowsOutlined from '../../lib/action/CompareArrowsOutlined';

const meta: Meta<typeof CompareArrowsOutlined> = {
  component: CompareArrowsOutlined,
  tags: ['autodocs'],
  title: 'action/CompareArrowsOutlined',
};

export default meta;
type Story = StoryObj<typeof CompareArrowsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
