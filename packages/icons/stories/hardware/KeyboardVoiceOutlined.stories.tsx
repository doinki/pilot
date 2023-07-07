import type { Meta, StoryObj } from '@storybook/react';

import KeyboardVoiceOutlined from '../../lib/hardware/KeyboardVoiceOutlined';

const meta: Meta<typeof KeyboardVoiceOutlined> = {
  component: KeyboardVoiceOutlined,
  tags: ['autodocs'],
  title: 'hardware/KeyboardVoiceOutlined',
};

export default meta;
type Story = StoryObj<typeof KeyboardVoiceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
