import type { Meta, StoryObj } from '@storybook/react';

import CallMissedOutgoingOutlined from '../../lib/communication/CallMissedOutgoingOutlined';

const meta: Meta<typeof CallMissedOutgoingOutlined> = {
  component: CallMissedOutgoingOutlined,
  tags: ['autodocs'],
  title: 'communication/CallMissedOutgoingOutlined',
};

export default meta;
type Story = StoryObj<typeof CallMissedOutgoingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
