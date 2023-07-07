import type { Meta, StoryObj } from '@storybook/react';

import PhoneLockedOutlined from '../../lib/notification/PhoneLockedOutlined';

const meta: Meta<typeof PhoneLockedOutlined> = {
  component: PhoneLockedOutlined,
  tags: ['autodocs'],
  title: 'notification/PhoneLockedOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneLockedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
