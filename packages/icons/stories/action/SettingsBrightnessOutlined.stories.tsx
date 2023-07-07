import type { Meta, StoryObj } from '@storybook/react';

import SettingsBrightnessOutlined from '../../lib/action/SettingsBrightnessOutlined';

const meta: Meta<typeof SettingsBrightnessOutlined> = {
  component: SettingsBrightnessOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsBrightnessOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsBrightnessOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
