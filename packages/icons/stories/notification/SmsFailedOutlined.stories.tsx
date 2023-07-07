import type { Meta, StoryObj } from '@storybook/react';

import SmsFailedOutlined from '../../lib/notification/SmsFailedOutlined';

const meta: Meta<typeof SmsFailedOutlined> = {
  component: SmsFailedOutlined,
  tags: ['autodocs'],
  title: 'notification/SmsFailedOutlined',
};

export default meta;
type Story = StoryObj<typeof SmsFailedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
