import type { Meta, StoryObj } from '@storybook/react';

import PendingOutlined from '../../lib/action/PendingOutlined';

const meta: Meta<typeof PendingOutlined> = {
  component: PendingOutlined,
  tags: ['autodocs'],
  title: 'action/PendingOutlined',
};

export default meta;
type Story = StoryObj<typeof PendingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
