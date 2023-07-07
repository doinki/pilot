import type { Meta, StoryObj } from '@storybook/react';

import LockOpenOutlined from '../../lib/action/LockOpenOutlined';

const meta: Meta<typeof LockOpenOutlined> = {
  component: LockOpenOutlined,
  tags: ['autodocs'],
  title: 'action/LockOpenOutlined',
};

export default meta;
type Story = StoryObj<typeof LockOpenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
