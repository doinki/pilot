import type { Meta, StoryObj } from '@storybook/react';

import SegmentOutlined from '../../lib/action/SegmentOutlined';

const meta: Meta<typeof SegmentOutlined> = {
  component: SegmentOutlined,
  tags: ['autodocs'],
  title: 'action/SegmentOutlined',
};

export default meta;
type Story = StoryObj<typeof SegmentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
