import type { Meta, StoryObj } from '@storybook/react';

import MailOutlined from '../../lib/content/MailOutlined';

const meta: Meta<typeof MailOutlined> = {
  component: MailOutlined,
  tags: ['autodocs'],
  title: 'content/MailOutlined',
};

export default meta;
type Story = StoryObj<typeof MailOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
