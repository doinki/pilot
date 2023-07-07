import type { Meta, StoryObj } from '@storybook/react';

import SystemUpdateOutlined from '../../lib/notification/SystemUpdateOutlined';

const meta: Meta<typeof SystemUpdateOutlined> = {
  component: SystemUpdateOutlined,
  tags: ['autodocs'],
  title: 'notification/SystemUpdateOutlined',
};

export default meta;
type Story = StoryObj<typeof SystemUpdateOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
