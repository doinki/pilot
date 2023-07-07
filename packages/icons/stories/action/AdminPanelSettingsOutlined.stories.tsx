import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelSettingsOutlined from '../../lib/action/AdminPanelSettingsOutlined';

const meta: Meta<typeof AdminPanelSettingsOutlined> = {
  component: AdminPanelSettingsOutlined,
  tags: ['autodocs'],
  title: 'action/AdminPanelSettingsOutlined',
};

export default meta;
type Story = StoryObj<typeof AdminPanelSettingsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
