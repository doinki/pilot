import type { Meta, StoryObj } from '@storybook/react';

import SubtitlesOffOutlined from '../../lib/action/SubtitlesOffOutlined';

const meta: Meta<typeof SubtitlesOffOutlined> = {
  component: SubtitlesOffOutlined,
  tags: ['autodocs'],
  title: 'action/SubtitlesOffOutlined',
};

export default meta;
type Story = StoryObj<typeof SubtitlesOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
