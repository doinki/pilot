import type { Meta, StoryObj } from '@storybook/react';

import SettingsBackupRestoreOutlined from '../../lib/action/SettingsBackupRestoreOutlined';

const meta: Meta<typeof SettingsBackupRestoreOutlined> = {
  component: SettingsBackupRestoreOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsBackupRestoreOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsBackupRestoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
