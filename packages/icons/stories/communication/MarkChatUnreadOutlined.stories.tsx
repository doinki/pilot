import type { Meta, StoryObj } from '@storybook/react';

import MarkChatUnreadOutlined from '../../lib/communication/MarkChatUnreadOutlined';

const meta: Meta<typeof MarkChatUnreadOutlined> = {
  component: MarkChatUnreadOutlined,
  tags: ['autodocs'],
  title: 'communication/MarkChatUnreadOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkChatUnreadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
