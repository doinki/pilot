import type { Meta, StoryObj } from '@storybook/react';

import ChatBubbleOutlineOutlined from '../../lib/communication/ChatBubbleOutlineOutlined';

const meta: Meta<typeof ChatBubbleOutlineOutlined> = {
  component: ChatBubbleOutlineOutlined,
  tags: ['autodocs'],
  title: 'communication/ChatBubbleOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof ChatBubbleOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
