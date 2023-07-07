import type { Meta, StoryObj } from '@storybook/react';

import PhonelinkRingOutlined from '../../lib/communication/PhonelinkRingOutlined';

const meta: Meta<typeof PhonelinkRingOutlined> = {
  component: PhonelinkRingOutlined,
  tags: ['autodocs'],
  title: 'communication/PhonelinkRingOutlined',
};

export default meta;
type Story = StoryObj<typeof PhonelinkRingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
