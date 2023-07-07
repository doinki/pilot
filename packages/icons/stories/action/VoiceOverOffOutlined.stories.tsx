import type { Meta, StoryObj } from '@storybook/react';

import VoiceOverOffOutlined from '../../lib/action/VoiceOverOffOutlined';

const meta: Meta<typeof VoiceOverOffOutlined> = {
  component: VoiceOverOffOutlined,
  tags: ['autodocs'],
  title: 'action/VoiceOverOffOutlined',
};

export default meta;
type Story = StoryObj<typeof VoiceOverOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
