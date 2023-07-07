import type { Meta, StoryObj } from '@storybook/react';

import MarkUnreadChatAltOutlined from '../../lib/communication/MarkUnreadChatAltOutlined';

const meta: Meta<typeof MarkUnreadChatAltOutlined> = {
  component: MarkUnreadChatAltOutlined,
  tags: ['autodocs'],
  title: 'communication/MarkUnreadChatAltOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkUnreadChatAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
