import type { Meta, StoryObj } from '@storybook/react';

import ElevenMpOutlined from '../../lib/image/ElevenMpOutlined';

const meta: Meta<typeof ElevenMpOutlined> = {
  component: ElevenMpOutlined,
  tags: ['autodocs'],
  title: 'image/ElevenMpOutlined',
};

export default meta;
type Story = StoryObj<typeof ElevenMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
