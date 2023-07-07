import type { Meta, StoryObj } from '@storybook/react';

import VoiceChatOutlined from '../../lib/notification/VoiceChatOutlined';

const meta: Meta<typeof VoiceChatOutlined> = {
  component: VoiceChatOutlined,
  tags: ['autodocs'],
  title: 'notification/VoiceChatOutlined',
};

export default meta;
type Story = StoryObj<typeof VoiceChatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
