import type { Meta, StoryObj } from '@storybook/react';

import SupportAgentOutlined from '../../lib/notification/SupportAgentOutlined';

const meta: Meta<typeof SupportAgentOutlined> = {
  component: SupportAgentOutlined,
  tags: ['autodocs'],
  title: 'notification/SupportAgentOutlined',
};

export default meta;
type Story = StoryObj<typeof SupportAgentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
