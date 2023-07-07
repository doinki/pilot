import type { Meta, StoryObj } from '@storybook/react';

import AccountTreeOutlined from '../../lib/notification/AccountTreeOutlined';

const meta: Meta<typeof AccountTreeOutlined> = {
  component: AccountTreeOutlined,
  tags: ['autodocs'],
  title: 'notification/AccountTreeOutlined',
};

export default meta;
type Story = StoryObj<typeof AccountTreeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
