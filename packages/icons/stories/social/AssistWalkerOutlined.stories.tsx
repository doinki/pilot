import type { Meta, StoryObj } from '@storybook/react';

import AssistWalkerOutlined from '../../lib/social/AssistWalkerOutlined';

const meta: Meta<typeof AssistWalkerOutlined> = {
  component: AssistWalkerOutlined,
  tags: ['autodocs'],
  title: 'social/AssistWalkerOutlined',
};

export default meta;
type Story = StoryObj<typeof AssistWalkerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
