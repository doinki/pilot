import type { Meta, StoryObj } from '@storybook/react';

import PowerSettingsNewOutlined from '../../lib/action/PowerSettingsNewOutlined';

const meta: Meta<typeof PowerSettingsNewOutlined> = {
  component: PowerSettingsNewOutlined,
  tags: ['autodocs'],
  title: 'action/PowerSettingsNewOutlined',
};

export default meta;
type Story = StoryObj<typeof PowerSettingsNewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
