import type { Meta, StoryObj } from '@storybook/react';

import CallMissedOutlined from '../../lib/communication/CallMissedOutlined';

const meta: Meta<typeof CallMissedOutlined> = {
  component: CallMissedOutlined,
  tags: ['autodocs'],
  title: 'communication/CallMissedOutlined',
};

export default meta;
type Story = StoryObj<typeof CallMissedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
