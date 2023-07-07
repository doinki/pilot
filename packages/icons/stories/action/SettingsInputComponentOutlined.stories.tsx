import type { Meta, StoryObj } from '@storybook/react';

import SettingsInputComponentOutlined from '../../lib/action/SettingsInputComponentOutlined';

const meta: Meta<typeof SettingsInputComponentOutlined> = {
  component: SettingsInputComponentOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsInputComponentOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsInputComponentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
