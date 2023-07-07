import type { Meta, StoryObj } from '@storybook/react';

import ChatOutlined from '../../lib/communication/ChatOutlined';

const meta: Meta<typeof ChatOutlined> = {
  component: ChatOutlined,
  tags: ['autodocs'],
  title: 'communication/ChatOutlined',
};

export default meta;
type Story = StoryObj<typeof ChatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
