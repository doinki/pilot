import type { Meta, StoryObj } from '@storybook/react';

import SipOutlined from '../../lib/communication/SipOutlined';

const meta: Meta<typeof SipOutlined> = {
  component: SipOutlined,
  tags: ['autodocs'],
  title: 'communication/SipOutlined',
};

export default meta;
type Story = StoryObj<typeof SipOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
