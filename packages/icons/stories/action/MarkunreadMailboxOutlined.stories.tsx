import type { Meta, StoryObj } from '@storybook/react';

import MarkunreadMailboxOutlined from '../../lib/action/MarkunreadMailboxOutlined';

const meta: Meta<typeof MarkunreadMailboxOutlined> = {
  component: MarkunreadMailboxOutlined,
  tags: ['autodocs'],
  title: 'action/MarkunreadMailboxOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkunreadMailboxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
