import type { Meta, StoryObj } from '@storybook/react';

import LockPersonOutlined from '../../lib/action/LockPersonOutlined';

const meta: Meta<typeof LockPersonOutlined> = {
  component: LockPersonOutlined,
  tags: ['autodocs'],
  title: 'action/LockPersonOutlined',
};

export default meta;
type Story = StoryObj<typeof LockPersonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
