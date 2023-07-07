import type { Meta, StoryObj } from '@storybook/react';

import SettingsOverscanOutlined from '../../lib/action/SettingsOverscanOutlined';

const meta: Meta<typeof SettingsOverscanOutlined> = {
  component: SettingsOverscanOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsOverscanOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsOverscanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
