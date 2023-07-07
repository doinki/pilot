import type { Meta, StoryObj } from '@storybook/react';

import ContactEmergencyOutlined from '../../lib/communication/ContactEmergencyOutlined';

const meta: Meta<typeof ContactEmergencyOutlined> = {
  component: ContactEmergencyOutlined,
  tags: ['autodocs'],
  title: 'communication/ContactEmergencyOutlined',
};

export default meta;
type Story = StoryObj<typeof ContactEmergencyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
