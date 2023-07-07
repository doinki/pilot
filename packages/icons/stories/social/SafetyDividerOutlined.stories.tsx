import type { Meta, StoryObj } from '@storybook/react';

import SafetyDividerOutlined from '../../lib/social/SafetyDividerOutlined';

const meta: Meta<typeof SafetyDividerOutlined> = {
  component: SafetyDividerOutlined,
  tags: ['autodocs'],
  title: 'social/SafetyDividerOutlined',
};

export default meta;
type Story = StoryObj<typeof SafetyDividerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
