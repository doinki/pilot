import type { Meta, StoryObj } from '@storybook/react';

import AssistantOutlined from '../../lib/image/AssistantOutlined';

const meta: Meta<typeof AssistantOutlined> = {
  component: AssistantOutlined,
  tags: ['autodocs'],
  title: 'image/AssistantOutlined',
};

export default meta;
type Story = StoryObj<typeof AssistantOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
