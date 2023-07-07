import type { Meta, StoryObj } from '@storybook/react';

import PhoneMissedOutlined from '../../lib/notification/PhoneMissedOutlined';

const meta: Meta<typeof PhoneMissedOutlined> = {
  component: PhoneMissedOutlined,
  tags: ['autodocs'],
  title: 'notification/PhoneMissedOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneMissedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
