import type { Meta, StoryObj } from '@storybook/react';

import SurroundSoundOutlined from '../../lib/av/SurroundSoundOutlined';

const meta: Meta<typeof SurroundSoundOutlined> = {
  component: SurroundSoundOutlined,
  tags: ['autodocs'],
  title: 'av/SurroundSoundOutlined',
};

export default meta;
type Story = StoryObj<typeof SurroundSoundOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
