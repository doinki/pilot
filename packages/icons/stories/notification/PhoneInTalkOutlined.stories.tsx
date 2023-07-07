import type { Meta, StoryObj } from '@storybook/react';

import PhoneInTalkOutlined from '../../lib/notification/PhoneInTalkOutlined';

const meta: Meta<typeof PhoneInTalkOutlined> = {
  component: PhoneInTalkOutlined,
  tags: ['autodocs'],
  title: 'notification/PhoneInTalkOutlined',
};

export default meta;
type Story = StoryObj<typeof PhoneInTalkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
