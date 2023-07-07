import type { Meta, StoryObj } from '@storybook/react';

import SpeakerGroupOutlined from '../../lib/hardware/SpeakerGroupOutlined';

const meta: Meta<typeof SpeakerGroupOutlined> = {
  component: SpeakerGroupOutlined,
  tags: ['autodocs'],
  title: 'hardware/SpeakerGroupOutlined',
};

export default meta;
type Story = StoryObj<typeof SpeakerGroupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
