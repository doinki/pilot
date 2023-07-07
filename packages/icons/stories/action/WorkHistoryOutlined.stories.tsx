import type { Meta, StoryObj } from '@storybook/react';

import WorkHistoryOutlined from '../../lib/action/WorkHistoryOutlined';

const meta: Meta<typeof WorkHistoryOutlined> = {
  component: WorkHistoryOutlined,
  tags: ['autodocs'],
  title: 'action/WorkHistoryOutlined',
};

export default meta;
type Story = StoryObj<typeof WorkHistoryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
