import type { Meta, StoryObj } from '@storybook/react';

import SettingsEthernetOutlined from '../../lib/action/SettingsEthernetOutlined';

const meta: Meta<typeof SettingsEthernetOutlined> = {
  component: SettingsEthernetOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsEthernetOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsEthernetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
