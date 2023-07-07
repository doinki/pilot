import type { Meta, StoryObj } from '@storybook/react';

import PhoneCallbackOutlined from '../../lib/notification/PhoneCallbackOutlined';

const meta: Meta<typeof PhoneCallbackOutlined> = {
  component: PhoneCallbackOutlined,
  tags: ['autodocs'],
  title: 'notification/PhoneCallbackOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneCallbackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
