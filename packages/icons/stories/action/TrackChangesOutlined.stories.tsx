import type { Meta, StoryObj } from '@storybook/react';

import TrackChangesOutlined from '../../lib/action/TrackChangesOutlined';

const meta: Meta<typeof TrackChangesOutlined> = {
  component: TrackChangesOutlined,
  tags: ['autodocs'],
  title: 'action/TrackChangesOutlined',
};

export default meta;
type Story = StoryObj<typeof TrackChangesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
