import type { Meta, StoryObj } from '@storybook/react';

import CallReceivedOutlined from '../../lib/communication/CallReceivedOutlined';

const meta: Meta<typeof CallReceivedOutlined> = {
  component: CallReceivedOutlined,
  tags: ['autodocs'],
  title: 'communication/CallReceivedOutlined',
};

export default meta;
type Story = StoryObj<typeof CallReceivedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
