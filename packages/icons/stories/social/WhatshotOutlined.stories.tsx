import type { Meta, StoryObj } from '@storybook/react';

import WhatshotOutlined from '../../lib/social/WhatshotOutlined';

const meta: Meta<typeof WhatshotOutlined> = {
  component: WhatshotOutlined,
  tags: ['autodocs'],
  title: 'social/WhatshotOutlined',
};

export default meta;
type Story = StoryObj<typeof WhatshotOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
