import type { Meta, StoryObj } from '@storybook/react';

import MarkChatReadOutlined from '../../lib/communication/MarkChatReadOutlined';

const meta: Meta<typeof MarkChatReadOutlined> = {
  component: MarkChatReadOutlined,
  tags: ['autodocs'],
  title: 'communication/MarkChatReadOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkChatReadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
