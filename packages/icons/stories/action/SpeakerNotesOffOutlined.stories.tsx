import type { Meta, StoryObj } from '@storybook/react';

import SpeakerNotesOffOutlined from '../../lib/action/SpeakerNotesOffOutlined';

const meta: Meta<typeof SpeakerNotesOffOutlined> = {
  component: SpeakerNotesOffOutlined,
  tags: ['autodocs'],
  title: 'action/SpeakerNotesOffOutlined',
};

export default meta;
type Story = StoryObj<typeof SpeakerNotesOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
