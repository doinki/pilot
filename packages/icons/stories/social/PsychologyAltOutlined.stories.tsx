import type { Meta, StoryObj } from '@storybook/react';

import PsychologyAltOutlined from '../../lib/social/PsychologyAltOutlined';

const meta: Meta<typeof PsychologyAltOutlined> = {
  component: PsychologyAltOutlined,
  tags: ['autodocs'],
  title: 'social/PsychologyAltOutlined',
};

export default meta;
type Story = StoryObj<typeof PsychologyAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
