import type { Meta, StoryObj } from '@storybook/react';

import AccessibilityOutlined from '../../lib/action/AccessibilityOutlined';

const meta: Meta<typeof AccessibilityOutlined> = {
  component: AccessibilityOutlined,
  tags: ['autodocs'],
  title: 'action/AccessibilityOutlined',
};

export default meta;
type Story = StoryObj<typeof AccessibilityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
