import type { Meta, StoryObj } from '@storybook/react';

import DialerSipOutlined from '../../lib/communication/DialerSipOutlined';

const meta: Meta<typeof DialerSipOutlined> = {
  component: DialerSipOutlined,
  tags: ['autodocs'],
  title: 'communication/DialerSipOutlined',
};

export default meta;
type Story = StoryObj<typeof DialerSipOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
