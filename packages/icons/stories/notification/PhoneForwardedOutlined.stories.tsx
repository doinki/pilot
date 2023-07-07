import type { Meta, StoryObj } from '@storybook/react';

import PhoneForwardedOutlined from '../../lib/notification/PhoneForwardedOutlined';

const meta: Meta<typeof PhoneForwardedOutlined> = {
  component: PhoneForwardedOutlined,
  tags: ['autodocs'],
  title: 'notification/PhoneForwardedOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneForwardedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
