import type { Meta, StoryObj } from '@storybook/react';

import TimelineOutlined from '../../lib/action/TimelineOutlined';

const meta: Meta<typeof TimelineOutlined> = {
  component: TimelineOutlined,
  tags: ['autodocs'],
  title: 'action/TimelineOutlined',
};

export default meta;
type Story = StoryObj<typeof TimelineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
