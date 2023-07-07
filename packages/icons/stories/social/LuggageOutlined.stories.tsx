import type { Meta, StoryObj } from '@storybook/react';

import LuggageOutlined from '../../lib/social/LuggageOutlined';

const meta: Meta<typeof LuggageOutlined> = {
  component: LuggageOutlined,
  tags: ['autodocs'],
  title: 'social/LuggageOutlined',
};

export default meta;
type Story = StoryObj<typeof LuggageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
