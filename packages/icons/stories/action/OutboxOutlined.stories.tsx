import type { Meta, StoryObj } from '@storybook/react';

import OutboxOutlined from '../../lib/action/OutboxOutlined';

const meta: Meta<typeof OutboxOutlined> = {
  component: OutboxOutlined,
  tags: ['autodocs'],
  title: 'action/OutboxOutlined',
};

export default meta;
type Story = StoryObj<typeof OutboxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
