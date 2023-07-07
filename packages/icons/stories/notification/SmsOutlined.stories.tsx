import type { Meta, StoryObj } from '@storybook/react';

import SmsOutlined from '../../lib/notification/SmsOutlined';

const meta: Meta<typeof SmsOutlined> = {
  component: SmsOutlined,
  tags: ['autodocs'],
  title: 'notification/SmsOutlined',
};

export default meta;
type Story = StoryObj<typeof SmsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
