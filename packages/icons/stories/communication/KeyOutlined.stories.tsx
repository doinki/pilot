import type { Meta, StoryObj } from '@storybook/react';

import KeyOutlined from '../../lib/communication/KeyOutlined';

const meta: Meta<typeof KeyOutlined> = {
  component: KeyOutlined,
  tags: ['autodocs'],
  title: 'communication/KeyOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
