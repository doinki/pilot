import type { Meta, StoryObj } from '@storybook/react';

import HandshakeOutlined from '../../lib/social/HandshakeOutlined';

const meta: Meta<typeof HandshakeOutlined> = {
  component: HandshakeOutlined,
  tags: ['autodocs'],
  title: 'social/HandshakeOutlined',
};

export default meta;
type Story = StoryObj<typeof HandshakeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
