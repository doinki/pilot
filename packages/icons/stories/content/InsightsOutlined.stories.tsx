import type { Meta, StoryObj } from '@storybook/react';

import InsightsOutlined from '../../lib/content/InsightsOutlined';

const meta: Meta<typeof InsightsOutlined> = {
  component: InsightsOutlined,
  tags: ['autodocs'],
  title: 'content/InsightsOutlined',
};

export default meta;
type Story = StoryObj<typeof InsightsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
