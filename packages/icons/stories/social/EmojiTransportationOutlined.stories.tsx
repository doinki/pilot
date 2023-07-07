import type { Meta, StoryObj } from '@storybook/react';

import EmojiTransportationOutlined from '../../lib/social/EmojiTransportationOutlined';

const meta: Meta<typeof EmojiTransportationOutlined> = {
  component: EmojiTransportationOutlined,
  tags: ['autodocs'],
  title: 'social/EmojiTransportationOutlined',
};

export default meta;
type Story = StoryObj<typeof EmojiTransportationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
