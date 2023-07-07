import type { Meta, StoryObj } from '@storybook/react';

import AnalyticsOutlined from '../../lib/action/AnalyticsOutlined';

const meta: Meta<typeof AnalyticsOutlined> = {
  component: AnalyticsOutlined,
  tags: ['autodocs'],
  title: 'action/AnalyticsOutlined',
};

export default meta;
type Story = StoryObj<typeof AnalyticsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
