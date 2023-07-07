import type { Meta, StoryObj } from '@storybook/react';

import SpeakerPhoneOutlined from '../../lib/communication/SpeakerPhoneOutlined';

const meta: Meta<typeof SpeakerPhoneOutlined> = {
  component: SpeakerPhoneOutlined,
  tags: ['autodocs'],
  title: 'communication/SpeakerPhoneOutlined',
};

export default meta;
type Story = StoryObj<typeof SpeakerPhoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
