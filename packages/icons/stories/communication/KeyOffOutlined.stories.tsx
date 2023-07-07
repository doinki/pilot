import type { Meta, StoryObj } from '@storybook/react';

import KeyOffOutlined from '../../lib/communication/KeyOffOutlined';

const meta: Meta<typeof KeyOffOutlined> = {
  component: KeyOffOutlined,
  tags: ['autodocs'],
  title: 'communication/KeyOffOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
