import type { Meta, StoryObj } from '@storybook/react';

import MailOutlineOutlined from '../../lib/communication/MailOutlineOutlined';

const meta: Meta<typeof MailOutlineOutlined> = {
  component: MailOutlineOutlined,
  tags: ['autodocs'],
  title: 'communication/MailOutlineOutlined',
};

export default meta;
type Story = StoryObj<typeof MailOutlineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
