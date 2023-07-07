import type { Meta, StoryObj } from '@storybook/react';

import PianoOffOutlined from '../../lib/social/PianoOffOutlined';

const meta: Meta<typeof PianoOffOutlined> = {
  component: PianoOffOutlined,
  tags: ['autodocs'],
  title: 'social/PianoOffOutlined',
};

export default meta;
type Story = StoryObj<typeof PianoOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
