import type { Meta, StoryObj } from '@storybook/react';

import PhoneIphoneOutlined from '../../lib/hardware/PhoneIphoneOutlined';

const meta: Meta<typeof PhoneIphoneOutlined> = {
  component: PhoneIphoneOutlined,
  tags: ['autodocs'],
  title: 'hardware/PhoneIphoneOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneIphoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
