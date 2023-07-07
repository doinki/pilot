import type { Meta, StoryObj } from '@storybook/react';

import PianoOutlined from '../../lib/social/PianoOutlined';

const meta: Meta<typeof PianoOutlined> = {
  component: PianoOutlined,
  tags: ['autodocs'],
  title: 'social/PianoOutlined',
};

export default meta;
type Story = StoryObj<typeof PianoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
