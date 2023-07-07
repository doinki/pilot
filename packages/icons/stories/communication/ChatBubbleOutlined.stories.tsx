import type { Meta, StoryObj } from '@storybook/react';

import ChatBubbleOutlined from '../../lib/communication/ChatBubbleOutlined';

const meta: Meta<typeof ChatBubbleOutlined> = {
  component: ChatBubbleOutlined,
  tags: ['autodocs'],
  title: 'communication/ChatBubbleOutlined',
};

export default meta;
type Story = StoryObj<typeof ChatBubbleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
