import type { Meta, StoryObj } from '@storybook/react';

import PhoneAndroidOutlined from '../../lib/hardware/PhoneAndroidOutlined';

const meta: Meta<typeof PhoneAndroidOutlined> = {
  component: PhoneAndroidOutlined,
  tags: ['autodocs'],
  title: 'hardware/PhoneAndroidOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneAndroidOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
