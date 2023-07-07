import type { Meta, StoryObj } from '@storybook/react';

import OutboundOutlined from '../../lib/action/OutboundOutlined';

const meta: Meta<typeof OutboundOutlined> = {
  component: OutboundOutlined,
  tags: ['autodocs'],
  title: 'action/OutboundOutlined',
};

export default meta;
type Story = StoryObj<typeof OutboundOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
