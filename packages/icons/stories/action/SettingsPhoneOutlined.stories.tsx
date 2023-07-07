import type { Meta, StoryObj } from '@storybook/react';

import SettingsPhoneOutlined from '../../lib/action/SettingsPhoneOutlined';

const meta: Meta<typeof SettingsPhoneOutlined> = {
  component: SettingsPhoneOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsPhoneOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsPhoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
