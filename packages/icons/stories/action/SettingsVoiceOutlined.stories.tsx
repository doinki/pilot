import type { Meta, StoryObj } from '@storybook/react';

import SettingsVoiceOutlined from '../../lib/action/SettingsVoiceOutlined';

const meta: Meta<typeof SettingsVoiceOutlined> = {
  component: SettingsVoiceOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsVoiceOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsVoiceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
