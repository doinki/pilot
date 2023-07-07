import type { Meta, StoryObj } from '@storybook/react';

import AccessibilityNewOutlined from '../../lib/action/AccessibilityNewOutlined';

const meta: Meta<typeof AccessibilityNewOutlined> = {
  component: AccessibilityNewOutlined,
  tags: ['autodocs'],
  title: 'action/AccessibilityNewOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessibilityNewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
