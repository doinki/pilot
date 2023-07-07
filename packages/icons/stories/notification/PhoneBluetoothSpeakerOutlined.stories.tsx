import type { Meta, StoryObj } from '@storybook/react';

import PhoneBluetoothSpeakerOutlined from '../../lib/notification/PhoneBluetoothSpeakerOutlined';

const meta: Meta<typeof PhoneBluetoothSpeakerOutlined> = {
  component: PhoneBluetoothSpeakerOutlined,
  tags: ['autodocs'],
  title: 'notification/PhoneBluetoothSpeakerOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneBluetoothSpeakerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
