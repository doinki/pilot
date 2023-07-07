import type { Meta, StoryObj } from '@storybook/react';

import SettingsApplicationsOutlined from '../../lib/action/SettingsApplicationsOutlined';

const meta: Meta<typeof SettingsApplicationsOutlined> = {
  component: SettingsApplicationsOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsApplicationsOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsApplicationsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
