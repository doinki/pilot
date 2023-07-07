import type { Meta, StoryObj } from '@storybook/react';

import MarkEmailUnreadOutlined from '../../lib/communication/MarkEmailUnreadOutlined';

const meta: Meta<typeof MarkEmailUnreadOutlined> = {
  component: MarkEmailUnreadOutlined,
  tags: ['autodocs'],
  title: 'communication/MarkEmailUnreadOutlined',
};

export default meta;
type Story = StoryObj<typeof MarkEmailUnreadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
