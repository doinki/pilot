import type { Meta, StoryObj } from '@storybook/react';

import CardGiftcardOutlined from '../../lib/action/CardGiftcardOutlined';

const meta: Meta<typeof CardGiftcardOutlined> = {
  component: CardGiftcardOutlined,
  tags: ['autodocs'],
  title: 'action/CardGiftcardOutlined',
};

export default meta;
type Story = StoryObj<typeof CardGiftcardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
