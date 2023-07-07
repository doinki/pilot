import type { Meta, StoryObj } from '@storybook/react';

import SettingsInputHdmiOutlined from '../../lib/action/SettingsInputHdmiOutlined';

const meta: Meta<typeof SettingsInputHdmiOutlined> = {
  component: SettingsInputHdmiOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsInputHdmiOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsInputHdmiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
