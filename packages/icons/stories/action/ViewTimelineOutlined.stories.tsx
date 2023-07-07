import type { Meta, StoryObj } from '@storybook/react';

import ViewTimelineOutlined from '../../lib/action/ViewTimelineOutlined';

const meta: Meta<typeof ViewTimelineOutlined> = {
  component: ViewTimelineOutlined,
  tags: ['autodocs'],
  title: 'action/ViewTimelineOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewTimelineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
