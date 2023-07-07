import type { Meta, StoryObj } from '@storybook/react';

import AssuredWorkloadOutlined from '../../lib/action/AssuredWorkloadOutlined';

const meta: Meta<typeof AssuredWorkloadOutlined> = {
  component: AssuredWorkloadOutlined,
  tags: ['autodocs'],
  title: 'action/AssuredWorkloadOutlined',
};

export default meta;
type Story = StoryObj<typeof AssuredWorkloadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
