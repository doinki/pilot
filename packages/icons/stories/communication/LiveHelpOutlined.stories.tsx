import type { Meta, StoryObj } from '@storybook/react';

import LiveHelpOutlined from '../../lib/communication/LiveHelpOutlined';

const meta: Meta<typeof LiveHelpOutlined> = {
  component: LiveHelpOutlined,
  tags: ['autodocs'],
  title: 'communication/LiveHelpOutlined',
};

export default meta;
type Story = StoryObj<typeof LiveHelpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
