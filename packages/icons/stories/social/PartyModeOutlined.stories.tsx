import type { Meta, StoryObj } from '@storybook/react';

import PartyModeOutlined from '../../lib/social/PartyModeOutlined';

const meta: Meta<typeof PartyModeOutlined> = {
  component: PartyModeOutlined,
  tags: ['autodocs'],
  title: 'social/PartyModeOutlined',
};

export default meta;
type Story = StoryObj<typeof PartyModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
