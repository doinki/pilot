import type { Meta, StoryObj } from '@storybook/react';

import WhatsappOutlined from '../../lib/social/WhatsappOutlined';

const meta: Meta<typeof WhatsappOutlined> = {
  component: WhatsappOutlined,
  tags: ['autodocs'],
  title: 'social/WhatsappOutlined',
};

export default meta;
type Story = StoryObj<typeof WhatsappOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
