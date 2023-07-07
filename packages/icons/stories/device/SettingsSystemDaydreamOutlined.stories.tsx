import type { Meta, StoryObj } from '@storybook/react';

import SettingsSystemDaydreamOutlined from '../../lib/device/SettingsSystemDaydreamOutlined';

const meta: Meta<typeof SettingsSystemDaydreamOutlined> = {
  component: SettingsSystemDaydreamOutlined,
  tags: ['autodocs'],
  title: 'device/SettingsSystemDaydreamOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsSystemDaydreamOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
