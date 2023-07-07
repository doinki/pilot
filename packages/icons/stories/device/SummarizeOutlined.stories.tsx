import type { Meta, StoryObj } from '@storybook/react';

import SummarizeOutlined from '../../lib/device/SummarizeOutlined';

const meta: Meta<typeof SummarizeOutlined> = {
  component: SummarizeOutlined,
  tags: ['autodocs'],
  title: 'device/SummarizeOutlined',
};

export default meta;
type Story = StoryObj<typeof SummarizeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
