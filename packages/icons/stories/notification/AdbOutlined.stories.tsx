import type { Meta, StoryObj } from '@storybook/react';

import AdbOutlined from '../../lib/notification/AdbOutlined';

const meta: Meta<typeof AdbOutlined> = {
  component: AdbOutlined,
  tags: ['autodocs'],
  title: 'notification/AdbOutlined',
};

export default meta;
type Story = StoryObj<typeof AdbOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
