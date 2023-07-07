import type { Meta, StoryObj } from '@storybook/react';

import TextsmsOutlined from '../../lib/communication/TextsmsOutlined';

const meta: Meta<typeof TextsmsOutlined> = {
  component: TextsmsOutlined,
  tags: ['autodocs'],
  title: 'communication/TextsmsOutlined',
};

export default meta;
type Story = StoryObj<typeof TextsmsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
