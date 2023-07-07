import type { Meta, StoryObj } from '@storybook/react';

import SettingsAccessibilityOutlined from '../../lib/action/SettingsAccessibilityOutlined';

const meta: Meta<typeof SettingsAccessibilityOutlined> = {
  component: SettingsAccessibilityOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsAccessibilityOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsAccessibilityOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
