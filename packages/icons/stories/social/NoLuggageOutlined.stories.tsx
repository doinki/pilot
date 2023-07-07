import type { Meta, StoryObj } from '@storybook/react';

import NoLuggageOutlined from '../../lib/social/NoLuggageOutlined';

const meta: Meta<typeof NoLuggageOutlined> = {
  component: NoLuggageOutlined,
  tags: ['autodocs'],
  title: 'social/NoLuggageOutlined',
};

export default meta;
type Story = StoryObj<typeof NoLuggageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
