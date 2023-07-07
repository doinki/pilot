import type { Meta, StoryObj } from '@storybook/react';

import SpeakerNotesOutlined from '../../lib/action/SpeakerNotesOutlined';

const meta: Meta<typeof SpeakerNotesOutlined> = {
  component: SpeakerNotesOutlined,
  tags: ['autodocs'],
  title: 'action/SpeakerNotesOutlined',
};

export default meta;
type Story = StoryObj<typeof SpeakerNotesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
