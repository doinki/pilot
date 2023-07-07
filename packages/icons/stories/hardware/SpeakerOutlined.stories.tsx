import type { Meta, StoryObj } from '@storybook/react';

import SpeakerOutlined from '../../lib/hardware/SpeakerOutlined';

const meta: Meta<typeof SpeakerOutlined> = {
  component: SpeakerOutlined,
  tags: ['autodocs'],
  title: 'hardware/SpeakerOutlined',
};

export default meta;
type Story = StoryObj<typeof SpeakerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
