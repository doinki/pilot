import type { Meta, StoryObj } from '@storybook/react';

import SettingsRemoteOutlined from '../../lib/action/SettingsRemoteOutlined';

const meta: Meta<typeof SettingsRemoteOutlined> = {
  component: SettingsRemoteOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsRemoteOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsRemoteOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
