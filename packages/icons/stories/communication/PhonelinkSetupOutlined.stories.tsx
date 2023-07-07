import type { Meta, StoryObj } from '@storybook/react';

import PhonelinkSetupOutlined from '../../lib/communication/PhonelinkSetupOutlined';

const meta: Meta<typeof PhonelinkSetupOutlined> = {
  component: PhonelinkSetupOutlined,
  tags: ['autodocs'],
  title: 'communication/PhonelinkSetupOutlined',
};

export default meta;
type Story = StoryObj<typeof PhonelinkSetupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
