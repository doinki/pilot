import type { Meta, StoryObj } from '@storybook/react';

import SettingsInputCompositeOutlined from '../../lib/action/SettingsInputCompositeOutlined';

const meta: Meta<typeof SettingsInputCompositeOutlined> = {
  component: SettingsInputCompositeOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsInputCompositeOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsInputCompositeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
