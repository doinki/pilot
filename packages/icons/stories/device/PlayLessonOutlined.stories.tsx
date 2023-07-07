import type { Meta, StoryObj } from '@storybook/react';

import PlayLessonOutlined from '../../lib/device/PlayLessonOutlined';

const meta: Meta<typeof PlayLessonOutlined> = {
  component: PlayLessonOutlined,
  tags: ['autodocs'],
  title: 'device/PlayLessonOutlined',
};

export default meta;
type Story = StoryObj<typeof PlayLessonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
