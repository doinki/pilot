import type { Meta, StoryObj } from '@storybook/react';

import MessageOutlined from '../../lib/communication/MessageOutlined';

const meta: Meta<typeof MessageOutlined> = {
  component: MessageOutlined,
  tags: ['autodocs'],
  title: 'communication/MessageOutlined',
};

export default meta;
type Story = StoryObj<typeof MessageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
