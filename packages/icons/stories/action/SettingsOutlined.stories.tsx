import type { Meta, StoryObj } from '@storybook/react';

import SettingsOutlined from '../../lib/action/SettingsOutlined';

const meta: Meta<typeof SettingsOutlined> = {
  component: SettingsOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
