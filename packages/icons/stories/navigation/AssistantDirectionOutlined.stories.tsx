import type { Meta, StoryObj } from '@storybook/react';

import AssistantDirectionOutlined from '../../lib/navigation/AssistantDirectionOutlined';

const meta: Meta<typeof AssistantDirectionOutlined> = {
  component: AssistantDirectionOutlined,
  tags: ['autodocs'],
  title: 'navigation/AssistantDirectionOutlined',
};

export default meta;
type Story = StoryObj<typeof AssistantDirectionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
