import type { Meta, StoryObj } from '@storybook/react';

import RecordVoiceOverOutlined from '../../lib/action/RecordVoiceOverOutlined';

const meta: Meta<typeof RecordVoiceOverOutlined> = {
  component: RecordVoiceOverOutlined,
  tags: ['autodocs'],
  title: 'action/RecordVoiceOverOutlined',
};

export default meta;
type Story = StoryObj<typeof RecordVoiceOverOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
