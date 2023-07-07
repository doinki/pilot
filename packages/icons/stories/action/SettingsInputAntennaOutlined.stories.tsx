import type { Meta, StoryObj } from '@storybook/react';

import SettingsInputAntennaOutlined from '../../lib/action/SettingsInputAntennaOutlined';

const meta: Meta<typeof SettingsInputAntennaOutlined> = {
  component: SettingsInputAntennaOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsInputAntennaOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsInputAntennaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
