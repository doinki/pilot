import type { Meta, StoryObj } from '@storybook/react';

import NatOutlined from '../../lib/communication/NatOutlined';

const meta: Meta<typeof NatOutlined> = {
  component: NatOutlined,
  tags: ['autodocs'],
  title: 'communication/NatOutlined',
};

export default meta;
type Story = StoryObj<typeof NatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
