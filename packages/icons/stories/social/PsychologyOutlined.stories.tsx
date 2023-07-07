import type { Meta, StoryObj } from '@storybook/react';

import PsychologyOutlined from '../../lib/social/PsychologyOutlined';

const meta: Meta<typeof PsychologyOutlined> = {
  component: PsychologyOutlined,
  tags: ['autodocs'],
  title: 'social/PsychologyOutlined',
};

export default meta;
type Story = StoryObj<typeof PsychologyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
