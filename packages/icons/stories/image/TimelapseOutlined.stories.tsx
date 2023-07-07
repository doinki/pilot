import type { Meta, StoryObj } from '@storybook/react';

import TimelapseOutlined from '../../lib/image/TimelapseOutlined';

const meta: Meta<typeof TimelapseOutlined> = {
  component: TimelapseOutlined,
  tags: ['autodocs'],
  title: 'image/TimelapseOutlined',
};

export default meta;
type Story = StoryObj<typeof TimelapseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
