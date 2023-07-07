import type { Meta, StoryObj } from '@storybook/react';

import MailLockOutlined from '../../lib/communication/MailLockOutlined';

const meta: Meta<typeof MailLockOutlined> = {
  component: MailLockOutlined,
  tags: ['autodocs'],
  title: 'communication/MailLockOutlined',
};

export default meta;
type Story = StoryObj<typeof MailLockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
