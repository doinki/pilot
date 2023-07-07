import type { Meta, StoryObj } from '@storybook/react';

import SettingsPowerOutlined from '../../lib/action/SettingsPowerOutlined';

const meta: Meta<typeof SettingsPowerOutlined> = {
  component: SettingsPowerOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsPowerOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsPowerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
